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

// Exercicio 4

type Funcionario = {
    nome : string ;
    cargo : string ;
};

const funcionarios : Funcionario [] = [
    { nome : " Marcos ", cargo : " Desenvolvedor " } ,
    { nome : " Fernanda ", cargo : " Gerente " } ,
    { nome : " Carlos ", cargo : " Desenvolvedor " } ,
    { nome : " Joana ", cargo : " Analista " }
];

const cargoDesejado : string = " Desenvolvedor ";

const dev = funcionarios.filter(funcionario => funcionario.cargo === cargoDesejado);

console.log(dev);

// Exercicio 5

type Aluno = {
    nome : string ;
    nota : number ;
};

const alunos : Aluno [] = [
    { nome : " Alice ", nota : 8 } ,
    { nome : " Bruno ", nota : 5 } ,
    { nome : " Carla ", nota : 7 } ,
    { nome : " Daniel ", nota : 6 }
];

function aprovados(alunos: Aluno[]): string[] {
    return alunos.filter(aluno => aluno.nota >= 7).map(aluno => aluno.nome.trim());
}

console.log(aprovados(alunos));


//Exercicio 6

type Evento = {
    nome : string ;
    mes : string ;
};

const eventos : Evento [] = [
    { nome : " Workshop TypeScript ", mes : " Janeiro " } ,
    { nome : " Hackathon ", mes : " Março" } ,
    { nome : " Conferência de IA", mes : " Janeiro " }
];

const mesDesejado : string = " Janeiro ";

const filtro = eventos.filter(evento => evento.mes === mesDesejado);

console.log(filtro);

