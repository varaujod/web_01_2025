import { Aluno } from "./Aluno";
import { Livro } from "./Livro";
import { Carro } from "./Carro";
import { Produto } from "./Produto";

const aluno1 = new Aluno("Pedro", "BT452584", 23);

aluno1.imprimirAluno();
aluno1.nome = "Carlos";
aluno1.imprimirAluno();


// Exercicio 

const livro1 = new Livro("Memórias Póstumas de Brás Cubas", "Machado de Assis", 1880, "Principis");
const livro2 = new Livro("Vidas Secas", "Graciliano Ramos", 1938, "Record");

livro1.exibirDados();
livro2.exibirDados();

const carro1 = new Carro("Fiat", "Argo", 2023);
carro1.mostrarCarro();

carro1.ano = 2026;
carro1.mostrarCarro();

const prod = new Produto ("Notebook", 3500);
prod.mostrarInformacoes();

