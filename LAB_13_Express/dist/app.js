"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Produto_1 = require("./Produto");
const app = (0, express_1.default)();
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
app.use(express_1.default.json());
function hello(req, res) {
    res.status(200).send("Hello World!!");
}
function filtrarProdutoPorID(req, res) {
    try {
        let id = Number(req.params.id);
        let status = "success";
        if (isNaN(id)) {
            throw new Error("O ID é obrigatoriamente numerico!");
        }
        else {
            res.status(200).json({
                "status": status,
                "data": {
                    "id": id
                }
            });
        }
    }
    catch (e) {
        if (e instanceof Error) {
            res.status(400).json({
                status: "error",
                message: e.message
            });
        }
    }
}
function filtrarProdutoPorNome(req, res) {
    try {
        let nome = req.params.nome;
        res.status(200).json({
            Nome: nome
        });
    }
    catch (e) {
        res.status(400).json({
            message: "Favor informar um Nome válido"
        });
    }
}
function novoProduto(req, res) {
    try {
        let data = req.body;
        if (!data.nome || !data.preco || !data.fabricante) {
            throw new Error("Produto requer nome, preço e fabricante");
        }
        if (!data.fabricante.nome || !data.fabricante.endereco.cidade || !data.fabricante.endereco.pais) {
            throw new Error("Produto requer fabricante completo com Nome, Cidade e Pais!");
        }
        const produto = new Produto_1.Produto(data.id, data.nome, data.preco, data.fabricante);
        res.status(200).json(produto);
    }
    catch (e) {
        if (e instanceof Error) {
            res.status(400).json({
                status: "error",
                message: e.message
            });
        }
    }
}
app.get("/api/hello", hello);
app.get("/api/product/:id", filtrarProdutoPorID);
app.get("/api/product", filtrarProdutoPorNome);
app.post("/api/product", novoProduto);
app.listen(PORT, () => console.log(` API em execução na URL: http://localhost:${PORT} `));
