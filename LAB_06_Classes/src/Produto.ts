export class Produto{
    nome: string;
    preco: number;

    constructor (nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
    }

    mostrarInformacoes (): void {
        console.log(`Nome: ${this.nome}
            Preço: ${this.preco}`);
    }

}


