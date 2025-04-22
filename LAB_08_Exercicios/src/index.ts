import { Livro } from "./Livro";
import { Produto } from "./Produto";
import { Cliente } from "./Cliente";
import { Numeros } from "./Numeros";

// ex 1
interface Funcionario {
    nome: string;
    idade: number;
    registro: number;
    salario: number;
    dataNascimento: Date;
    ativo: boolean;
}

const marli: Funcionario = {
    nome: "Marli Araújo",
    idade: 56,
    registro: 667691,
    salario: 3560,
    dataNascimento: new Date("1969-07-06"),
    ativo: true
};

console.log(marli);

// ex 2

const livro3 = new Livro("Vidas Secas", "Graciliano Ramos", 1938);
console.log(livro3);

// ex 3

const kitkat = new Produto(5896585,"Kit Kat - Nestlé 120g", 4.99);
console.log(kitkat);

// ex 4

interface Animal {
    nome: string;
    tipo: string;
}

function criarAnimal (a: Animal ) : string {
    return "O animal " + a.nome + " é do tipo " + a.tipo;
}

const animal1: Animal = {
    nome: "Cachorro",
    tipo: "Mamifero"
};

console.log(criarAnimal(animal1));

// ex 5

const cliente1 = new Cliente("Vinicius Araújo", "123.112.123-98", {
    rua: "Rua Modesto Reali",
    numero: 161,
    cidade: "Tatuí"
});

console.log(cliente1);

// ex 6

const numeros = new Numeros([1, 2, 3, 4, 5]);

numeros.adicionar(6);
numeros.adicionar(7);
numeros.adicionar(8);

numeros.removerUltimo();

console.log(numeros);
console.log(numeros.media());

