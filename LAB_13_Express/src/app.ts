import express, {Request, Response} from "express"
import { Produto } from "./Produto";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());

function hello(req: Request, res: Response): void{
    res.status(200).send("Hello World!!");
}

function filtrarProdutoPorID(req: Request, res: Response): void{
try{
    let id = Number(req.params.id);
    let status = "success";

    if(isNaN(id)){
        throw new Error ("O ID é obrigatoriamente numerico!");
    } else{
    res.status(200).json(
        {
            "status": status,
            "data": {
                "id": id
            }
        }
    )
}} catch(e: unknown){
    if(e instanceof Error){
    res.status(400).json(
        {
            status: "error",
            message: e.message
        }
    )
}
}}


function filtrarProdutoPorNome(req: Request, res: Response): void{
try{
    let nome = req.params.nome;
    res.status(200).json(
        {
            Nome: nome
        }
    )
} catch(e: unknown){
    res.status(400).json(
        {
            message: "Favor informar um Nome válido"
        }
    )
}
}

function novoProduto(req: Request, res: Response): void{
try{
    let data : any = req.body;

    if (!data.nome || !data.preco || !data.fabricante){
        throw new Error ("Produto requer nome, preço e fabricante");
    }

    if(!data.fabricante.nome || !data.fabricante.endereco.cidade || !data.fabricante.endereco.pais){
        throw new Error ("Produto requer fabricante completo com Nome, Cidade e Pais!");
    }

    const produto = new Produto (data.id, data.nome, data.preco, data.fabricante);
    res.status(200).json(produto)
} catch(e: unknown){
    if(e instanceof Error){
    res.status(400).json(
        {
            status: "error",
            message: e.message
        }
    )
}
}
}

app.get("/api/hello", hello);
app.get("/api/product/:id", filtrarProdutoPorID);
app.get("/api/product", filtrarProdutoPorNome);
app.post("/api/product", novoProduto);

app.listen(PORT, () => console.log(` API em execução na URL: http://localhost:${PORT} `));

