export class Jogador{
    id: number;
    nome: string;
    cpf: number;
    email: string;
    telefone: number;
    posicao: number;

    constructor(id: number, nome: string, cpf: number, email: string, telefone: number, posicao: number){
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.telefone = telefone;
        this.posicao = posicao;
    }
}