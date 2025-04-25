class Exercicios{
    compararStrings(str1: string, str2: string): boolean;
    compararStrings(str1: any, str2: any): any{
        if(str1.toLowerCase() === str2.toLowerCase()){
            return true;
        }
        else{
            return false;
        }
    }

    formatar(form1: number): number;
    formatar(form1: Date): Date;
    formatar(form1: boolean): boolean;
    formatar(form1: any): any{
        if(typeof form1 === "number"){
            return form1.toFixed(2);
        }

        else if(form1 instanceof Date){
            return form1.toLocaleDateString('pt-BR');
        }

        else if(typeof form1 === "boolean"){
            if(form1 === true){
                return "SIM";
            }
            else{
                return "NÂO";
            }
    }
}

    // Exercícios
    // Exercício 3: Manipulação Avançada
    // • Contar ocorrências de substring
    // • Mostrar primeira letra de cada palavra
    // • Remover todas as vogais
    //  faça isso ocorrer console . log ( Exercicio . contarOcorrencias (" banana ", "na") ) ; // 2


}

const exercicios = new Exercicios();
    console.log(exercicios.compararStrings(" Hello ", " hello ")); // true
    console.log(exercicios.compararStrings(" camelCase ", " CAMELcase ")); // true
    console.log(exercicios.compararStrings(" TypeScript ", " typescript ")); // true
    console.log(exercicios.compararStrings(" Different ", " Strings ")); // false

    console.log(exercicios.formatar(123.4567)); // "123.46"
    console.log(exercicios.formatar(new Date (2023, 9, 5))); // "05/10/2023"
    console.log(exercicios.formatar(true)); // " Sim"
    console.log(exercicios.formatar(false)); // "Não"
