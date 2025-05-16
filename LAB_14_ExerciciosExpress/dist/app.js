"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jogadores = void 0;
const express_1 = __importDefault(require("express"));
const Jogador_1 = require("./Jogador");
const app = (0, express_1.default)();
const PORT = process.env.PORT ?? 3000;
app.use(express_1.default.json());
exports.jogadores = [];
function listarJogadores(req, res) {
    res.json(exports.jogadores);
}
function filtrarJogadorPorID(req, res) {
    try {
        let id = Number(req.params.id);
        let status = "success";
        if (isNaN(id)) {
            throw new Error("O ID é obrigatóriamente númerico!");
        }
        else {
            res.status(200).json({
                "status": status,
                "data": exports.jogadores.find(j => String(j.id) === req.params.id)
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
function novoJogador(req, res) {
    try {
        let data = req.body;
        const id = exports.jogadores.length + 1;
        if (!data.nome || !data.cpf || !data.email || !data.telefone || !data.posicao) {
            throw new Error("Todas as informações não foram adicionadas, tente novamente!");
        }
        const jogador = new Jogador_1.Jogador(id, data.nome, data.cpf, data.email, data.telefone, data.posicao);
        res.status(200).json(jogador);
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
// function atualizarJogador(req: Request, res: Response): void{
// }
app.get("/api/jogadores", listarJogadores);
app.get("/api/jogadores/:id", filtrarJogadorPorID);
app.post("/api/jogadores", novoJogador);
app.delete("/api/jogadores/:id", filtrarJogadorPorID);
app.listen(PORT, () => console.log(`API em execução no URL: http://localhost:${PORT}`));
