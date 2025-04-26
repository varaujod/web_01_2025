class Pessoa { 
    constructor(public nome: string, public email: string, public dataNascimento: string) {

    } 

    validarNome(): void {
        this.nome = this.nome.trim().toUpperCase();
        if (this.nome.length === 0) {
            throw new Error("O nome não pode estar vazio.");
        }
    }

    validarEmail(): void {
        if (!this.email.includes('@') || !this.email.endsWith('.com')) {
            throw new Error("O e-mail deve conter '@' e terminar com '.com'.");
        }
    }

    validarDataNascimento(): void {
        
    }

}