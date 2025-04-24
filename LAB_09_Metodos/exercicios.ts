class Exercicios{
    compararStrings(str1: string, str2: string): string;
    compararStrings(str1: string, str2: string): boolean;
    compararStrings(str1: any, str2: any): any{
        return str1.trim() === str2.trim();
    }

    formatar(form1: number): number;
    formatar(form1: Date): Date;
    formatar(form1: boolean): boolean;
    formatar(form1: any): any{
        if(typeof form1 === "number"){
            return form1.toFixed(2);
        }

        else if(form1 === Date){
            return form1.toLocaleDateString('pt-BR');
        }

        else if(typeof form1 === "boolean"){
            if(form1 === true){
                return "SIM";
            }
            else if(form1 === false){
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

    contarOcorrencias(a: string, b: string): number{

    }



}