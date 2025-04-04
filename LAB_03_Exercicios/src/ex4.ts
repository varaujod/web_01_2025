// Exercicio 4

let numeroos2: number[] = [12, 25, 37, 40, 18, 55, 62, 71, 84, 91, 105, 120];
let multiplosDe3: number[] = [];
let multiplosDe5: number[] = [];
let outros: number[] = [];

    for(let i = 0; i < numeroos2.length; i++){
        let numero = numeroos2[i];

        if(numero % 3 === 0){
            multiplosDe3.push(numero);
        }

        else if(numero % 5 === 0){
            multiplosDe5.push(numero);
        }

        else{
            outros.push(numero);
        }
    }

    for(let i = 0; i < multiplosDe3.length; i++){
        for(let j = i+1; j < multiplosDe3.length; j++){
            if(multiplosDe3[i] < multiplosDe3[j]){
                let temp = multiplosDe3[i];
                multiplosDe3[i] = multiplosDe3[j];
                multiplosDe3[j] = temp;
            }
        }
    }

    for(let i = 0; i < multiplosDe5.length; i++){
        for(let j = i+1; j < multiplosDe5.length; j++){
            if(multiplosDe5[i] < multiplosDe5[j]){
                let temp = multiplosDe5[i];
                multiplosDe5[i] = multiplosDe5[j];
                multiplosDe5[j] = temp;
            }
        }
    }

    for(let i = 0; i < outros.length; i++){
        for(let j = i+1; j < outros.length; j++){
            if(outros[i] < outros[j]){
                let temp = outros[i];
                outros[i] = outros[j];
                outros[j] = temp;
            }
        }
    }

    let somaMultiplos3: number = 0;
    for(let i = 0; i < multiplosDe3.length; i++){
        somaMultiplos3 += multiplosDe3[i];
    }

    let somaMultiplos5: number = 0;
    for(let i = 0; i < multiplosDe5.length; i++){
        somaMultiplos5 += multiplosDe5[i];
    }

    let somaOutros: number = 0;
    for(let i = 0; i < outros.length; i++){
        somaOutros += outros[i];
    }



    let mediaMulti3 = somaMultiplos3/multiplosDe3.length;
    let mediaMulti5 = somaMultiplos5/multiplosDe5.length;
    let mediaOutros = somaOutros/outros.length;



    let medianaMultiplosDe3: number;
    const nMultiplosDe3 = multiplosDe3.length;
    const meioMultiplos3 = Math.floor(nMultiplosDe3 / 2);

    if(nMultiplosDe3 % 2 === 1){
        medianaMultiplosDe3 = multiplosDe3[meioMultiplos3];
    }

    else{
        medianaMultiplosDe3 = (multiplosDe3[meioMultiplos3 - 1] + multiplosDe3[meioMultiplos3]) / 2;
    }


    let medianaMultiplosDe5: number;
    const nMultiplosDe5 = multiplosDe5.length;
    const meioMultiplos5 = Math.floor(nMultiplosDe5 / 2);

    if(nMultiplosDe5 % 2 === 1){
        medianaMultiplosDe5 = multiplosDe5[meioMultiplos5];
    }

    else{
        medianaMultiplosDe5 = (multiplosDe5[meioMultiplos5 - 1] + multiplosDe5[meioMultiplos5]) / 2;
    }


    let medianaOutros: number;
    const nOutros = outros.length;
    const meioOutros = Math.floor(nOutros / 2);

    if(nOutros % 2 === 1){
        medianaOutros = outros[meioOutros];
    }

    else{
        medianaOutros = (outros[meioOutros - 1] + outros[meioOutros]) / 2;
    }


    let maiorMulti3: number = multiplosDe3[0];
    let menorMulti3: number = multiplosDe3[0];

    for (let i = 1; i < multiplosDe3.length; i++) {
        let aux1 = multiplosDe3[i]; 

        if (aux1 > maiorMulti3) {
            maiorMulti3 = aux1; 
        }

        if (aux1 < menorMulti3) {
            menorMulti3 = aux1; 
        }
}

    let maiorMulti5: number = multiplosDe5[0];
    let menorMulti5: number = multiplosDe5[0];

    for(let i = 1; i < multiplosDe5.length; i++){
        let aux2 = multiplosDe5[i];

        if(aux2 > maiorMulti5) {
            maiorMulti5 = aux2;
        }

        if(aux2 < menorMulti5){
            menorMulti5 = aux2;
        }
    }

    let maiorOutros: number = outros[0];
    let menorOutros: number = outros[0];

    for(let i = 1; i < outros.length; i++){
        let aux3 = outros[i];

        if(aux3 > maiorOutros) {
            maiorOutros = aux3;
        }

        if(aux3 < menorOutros){
            menorOutros = aux3;
        }
    }

console.log("Números de multiplos de 3: ", multiplosDe3);
console.log("Números de multiplos de 5: ", multiplosDe5);
console.log("Outros Números: ", outros);
console.log("Média dos multiplos de 3: ", mediaMulti3);
console.log("Média dos multiplos de 5: ", mediaMulti5);
console.log("Média dos outros números: ", mediaOutros);
console.log("Mediana dos multiplos de 3: ", medianaMultiplosDe3);
console.log("Mediana dos multiplos de 5: ", medianaMultiplosDe5);
console.log("Mediana dos outros números: ", medianaOutros);
console.log("Maior valor dos multiplos de 3: ", maiorMulti3);
console.log("Maior valor dos multiplos de 5: ", maiorMulti5);
console.log("Maior valor dos outros números: ", maiorOutros);
console.log("Menor valor dos multiplos de 3: ", menorMulti3);
console.log("Menor valor dos multiplos de 5: ", menorMulti5);
console.log("Menor valor dos outros números: ", menorOutros);
console.log("Soma de todos os valores dos multiplos de 3: ", somaMultiplos3);
console.log("Soma de todos os valores dos multiplos de 5: ", somaMultiplos5);
console.log("Soma de todos os valores dos outros números: ", somaOutros);