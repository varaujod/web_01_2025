// Exercicio 1

let numeros2: number[] = [12, 25, 37, 40, 18, 55, 62, 71, 84, 91];
let par: number[] = [];
let impar: number[] = [];

for(const item of numeros2){
    if(item % 2 === 0){
        par.push(item); 
    }

    else{
        impar.push(item);
    }
}

    for(let i = 0; i < par.length; i++){
        for(let a = i+1; a < par.length; a++){
            if(par[i] > par[a]){
                let temp = par[i];
                par[i] = par[a];
                par[a] = temp;
            }
        }
    }

    for(let i=0; i < impar.length; i++){
        for(let b = i+1; b < impar.length; b++){
            if(impar[i] > impar[b]){
                let temp = impar[b];
                impar[i] = impar[b];
                impar[b] = temp;
            }
        }
    }

let maiorpar: number = par[0];
let menorpar: number = par[0];
let aux: number; 

for (let i = 1; i < par.length; i++) {
    aux = par[i]; 

    if (aux > maiorpar) {
        maiorpar = aux; 
    }

    if (aux < menorpar) {
        menorpar = aux; 
    }
}

let maiorimpar: number = impar[0];
let menorimpar: number = impar[0];

for (let i = 1; i < impar.length; i++) {
    aux = impar[i]; 

    if (aux > maiorimpar) {
        maiorimpar = aux; 
    }

    if (aux < menorimpar) {
        menorimpar = aux; 
    }
}

    let somapar: number = 0;
    for(let i = 0; i < par.length; i++){
        somapar += par[i];
    }

    let mediapar: number = 0;

    mediapar = somapar/par.length;

    let somaimpar: number = 0;
    for(let i = 0; i < impar.length; i++){
        somaimpar += impar[i];
    }

    let mediaimpar: number = 0; 

    mediaimpar = somaimpar/impar.length;

    console.log("Números pares: ", par);
    console.log("Números impares: ", impar);
    console.log("Média dos números pares: ", mediapar);
    console.log("Média dos números impares: ", mediaimpar);
    console.log("Maior número par: ", maiorpar);
    console.log("Menor número par: ", menorpar);
    console.log("Maior número impar: ", maiorimpar);
    console.log("Menor número impar: ", menorimpar);
    console.log("Soma dos valores pares: ", somapar);
    console.log("Soma dos valores impares: ", somaimpar);

// Exercicio 2

