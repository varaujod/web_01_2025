// Exercicio 1

function maiuscula(palavra: string): string{
    return palavra.toUpperCase();
}

console.log(maiuscula("amor"));

const maiuscula1 = (p: string): string => p.toUpperCase();

console.log(maiuscula1("oi"));

// Exercicio 2

function multiplicar(a: number, b: number): number{
    return a * b;
}

const multiplicar1 = (a: number, b: number): number => a*b;

console.log(multiplicar(2,2));
console.log(multiplicar1(2,3));

// Exercicio 3

function dobrarNumeros(num: number[] = [1,2,3,4,6]): number[]{    
    return num.map(n => n*2);
}

const dobrarNumeros1 = (num: number[]): number[] => num.map(n => n * 2);

console.log(dobrarNumeros1([2,4,6,8]));
console.log(dobrarNumeros([2,4,6,8]));

