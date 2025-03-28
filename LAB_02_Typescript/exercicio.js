// Exercicio 1
var idades = [10, 15, 20, 8, 17, 25];
for (var _i = 0, idades_1 = idades; _i < idades_1.length; _i++) {
    var num = idades_1[_i];
    if (num < 12) {
        console.log("O usuário ", num, " é uma criança");
    }
    else if (num >= 12 && num < 18) {
        console.log("O usuário ", num, " é um adolesecente");
    }
    else {
        console.log("O usuário ", num, " é um adulto");
    }
}
// Exercicio 2
var nomes1 = ["Carlos", "Ana", "Pedro", "Mariana"];
var pedro = nomes1.indexOf("Pedro");
nomes1.splice(pedro, 1);
nomes1.push("João");
nomes1.unshift("Beatriz");
console.log(nomes1);
// Exercicio 3
var listaMista = [1, "Maçã", 2, "Banana", 3, "Laranja"];
var numeros1 = [];
var frutas = [];
for (var _a = 0, listaMista_1 = listaMista; _a < listaMista_1.length; _a++) {
    var item = listaMista_1[_a];
    if (typeof item === "number") {
        numeros1.push(item);
    }
    else if (typeof item === "string") {
        frutas.push(item);
    }
}
console.log("Números: ", numeros1);
console.log("Frutas: ", frutas);
