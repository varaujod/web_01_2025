// Exercicio 3

let dados: (number | string) [] = [10, "Azul", 25, "Vermelho", 30, "Verde"];
let valoresNumericos: number[] = [];
let valoresTextuais: string[] = [];

for(const item of dados){
    if(typeof item === "number"){
        valoresNumericos.push(item);
    } else if (typeof item === "string"){
        valoresTextuais.push(item);
    }
}

console.log(valoresNumericos);
console.log(valoresTextuais);