import express, {Request, Response} from "express";
import { Jogador } from "./Jogador";

const app = express();
const PORT = process.env.PORT ?? 3000

app.use(express.json());

export const jogadores: Jogador[] = [];

function listarJogadores(req: Request, res: Response): void {
    res.json(jogadores);
}

function filtrarJogadorPorID(req: Request, res: Response): void{
    try{
        let id = Number(req.params.id);
        let status = "success";

        if(isNaN(id)){
            throw new Error ("O ID é obrigatóriamente númerico!");
        } else{
            res.status(200).json(
                {
                    "status": status,
                    "data": jogadores.find(j => String(j.id) === req.params.id)
                }
            )
        }
    } catch(e: unknown){
    if(e instanceof Error){
    res.status(400).json(
        {
            status: "error",
            message: e.message
        }
    )
}}}

function novoJogador(req: Request, res: Response): void{
    try{
        let data : any = req.body;
        const id = jogadores.length + 1;

        if(!data.nome || !data.cpf || !data.email || !data.telefone || !data.posicao){
            throw new Error("Todas as informações não foram adicionadas, tente novamente!");
        }

        const jogador = new Jogador(id, data.nome, data.cpf, data.email, data.telefone, data.posicao)
        res.status(200).json(jogador);
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

// function atualizarJogador(req: Request, res: Response): void{

// }

app.get("/api/jogadores", listarJogadores);
app.get("/api/jogadores/:id", filtrarJogadorPorID);
app.post("/api/jogadores", novoJogador);
app.delete("/api/jogadores/:id", filtrarJogadorPorID);
app.listen(PORT, () => console.log(`API em execução no URL: http://localhost:${PORT}`));