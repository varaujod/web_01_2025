// Exercicio 2

let produtos: string[] = ["Arroz", "Feijão", "Leite", "Pão"];
let substituicao: number = produtos.indexOf("Leite");

if (substituicao !== -1) {
    produtos[substituicao] = "Queijo";
}

produtos.shift();
produtos.push("Café");

console.log(produtos, produtos.length);