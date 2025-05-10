import { Endereco } from "./Endereco";
import { Fabricante } from "./Fabricante";

export class Produto{
    id: number;
    nome: string;
    endereco: Endereco;
    fabricante: Fabricante;

    constructor(id: number, nome: string, endereco: Endereco, fabricante: Fabricante){
        this.id = id;
        this.nome = nome;
        this.endereco = endereco;
        this.fabricante = fabricante;
    }
}