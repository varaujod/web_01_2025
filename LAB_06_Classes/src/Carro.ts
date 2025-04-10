export class Carro{
    marca: string;
    modelo: string; 
    ano: number;

    constructor(marca: string, modelo: string, ano: number){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    mostrarCarro(){
        console.log(`Marca: ${this.marca}
            Modelo: ${this.modelo}
            Ano: ${this.ano}`);
    }
}

const carro1 = new Carro("Fiat", "Argo", 2023);

carro1.mostrarCarro();

carro1.ano = 2026;