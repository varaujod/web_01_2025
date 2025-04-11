export class DataUtilis {
    formatarData(data: Date, formato: string): string{
        if(formato === "dd/mm/yyyy"){
            return data.toLocaleDateString('pt-BR');
        }

        else{
            return data.toISOString();
        }
    }

    diferencaEmDias(data1: Date, data2: Date): number{
        const diffMs = data2.getTime() - data1.getTime();
        const msPorDia = 1000 * 60 * 60 * 24;
        return diffMs / msPorDia;
    }

    adicionarDias(data: Date, dias: number): Date{
        data.setDate(data.getDate () + dias);
        return data;
    }

    ehFinalDeSemana(data: Date): boolean{
        const diaSemana = data.getDay();
        return diaSemana === 0 || diaSemana === 6;
    }

    converterParaISO(data: Date): string{
        return data.toISOString();
    }
}