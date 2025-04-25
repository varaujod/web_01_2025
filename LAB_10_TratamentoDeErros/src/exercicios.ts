// Exercicio 1 

// O erro é que ele não iria identificar se foi colocado algum número na função, sendo assim, 
// se ele não colocasse nenhum número iria executar sem resposta de erro e de resultado que é 0. 
// Então foi colocado uma confirmação de que não há notas a serem calculadas 
// e se ocorrer outro erro especifico no catch tem a resolução se caso der erro no calculo.


function calcularMedia(notas: number[]): number {
    let soma = 0;
    try {
        for (let i = 0; i < notas.length; i++) { 
            soma += notas[i];
        }
        if (notas.length === 0) {
            throw new Error("Array de notas está vazio.");
        }
        return soma / notas.length;
    } catch (erro) {
        console.error("Erro ao calcular a média:", (erro as Error).message);
        return 0;
    }
}

console.log(calcularMedia([]));

// Exercicio 2

function cadastrarUsuario (nome: string, idade: number){ 
    try{
        if (nome.length === 0 || idade < 0) {
            throw new Error("Dados inválidos");
        }
    
        console.log("Usuário cadastrado!"); 
    }
    catch(erro){
        console.error("Não foi possivel cadastrar o usuário:", (erro as Error).message);
    }
}

console.log(cadastrarUsuario("", 10));

// Exercicio 3

function executarOperacao(){
    try{
        throw new Error ("Erro genérico");
    }
    catch(erro: unknown ){
        if(erro instanceof Error){
            console.log ("Erro: ", erro.message);
        }
    }
}

console.log(executarOperacao());

// Exercicio 4

