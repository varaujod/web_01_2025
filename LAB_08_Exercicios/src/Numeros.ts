export class Numeros{
    valores: number[];

    constructor(valores: number[]){
        this.valores = valores;
    }

    adicionar(valor: number): void{
        this.valores.push(valor);
    }

    removerUltimo(): void {
        this.valores.pop();
    }

    media(): number {
        if (this.valores.length === 0) {
            return 0; // Retorna 0 se o vetor estiver vazio
        }

        let soma = 0;

        for (const valor of this.valores) {
            soma += valor;
        }

        return soma / this.valores.length;
    }
}
