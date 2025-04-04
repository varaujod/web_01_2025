// Exercicio 1

let idades: Array<number> = [10, 15, 20, 8, 17, 25];

for(const num of idades){
    if(num < 12){
        console.log("O usuário ", num, " é uma criança");
    }

    else if(num >= 12 && num < 18){
        console.log("O usuário ", num, " é um adolesecente");
    }

    else{
        console.log("O usuário ", num, " é um adulto");
    }
}

// Exercicio 2

let nomes1: string[] = ["Carlos", "Ana", "Pedro", "Mariana"];
let pedro: number = nomes1.indexOf("Pedro");
nomes1.splice(pedro, 1);

nomes1.push("João");
nomes1.unshift("Beatriz");

console.log(nomes1);

// Exercicio 3

let listaMista: (number | string)[] = [1, "Maçã", 2, "Banana", 3, "Laranja"];
let numeros1: number[] = [];
let frutas: string[] = [];

for (const item of listaMista) {
    if (typeof item === "number") {
        numeros1.push(item);
    } else if (typeof item === "string") {
        frutas.push(item);
    }
}

console.log("Números: ", numeros1);
console.log("Frutas: ", frutas);


