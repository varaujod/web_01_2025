import { executarComandoSQL } from "../database/mysql";
import { Product } from "../model/Product";

export class ProductRepository{
    private static instance: ProductRepository;

    public static getInstance(): ProductRepository{
        if(!this.instance){
            this.instance = new ProductRepository();
        }

        return this.instance;
    }

    imprimeResult(err: any, result: any){
        if(result != undefined){
            console.log("Dentro callback", result);
        }
    }

    async createTable() {
        try {
            await executarComandoSQL(
                "CREATE TABLE IF NOT EXISTS Vendas.Product(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, price DECIMAL(10,2) NOT NULL)",
                [], this.imprimeResult
            );
            console.log('Tabela criada ou já existente.');
        } catch (err) {
            console.error('Erro ao executar a query: ', err);
        }
    }

    insertProduct(product: Product){
        try{
            const resultado = executarComandoSQL(
                "INSERT INTO vendas.Product (name, price) values (?, ?)", 
                [product.name, product.price], this.imprimeResult);

            console.log('Produto Inserido com sucesso: ', resultado);

        } catch(err){
            console.error('Erro ao inserir um produto: ', err);
        }
    }

    deleteProduct(id: number){
        try{
            const resultado = executarComandoSQL(
                "DELETE FROM vendas.Product WHERE id = ?",
                [id], this.imprimeResult
            );

            console.log('Produto deletado com Sucesso!', resultado);

        } catch(err){
            console.error('O produto não foi deletado! Tente Novamente', err);
        }
    }

    updateProduct(id: number, update: any){
        try{
            const campos = [];
            const valores = [];

            if (update.name !== undefined) {
                campos.push("name = ?");
                valores.push(update.name);
            }

            if (update.price !== undefined) {
                campos.push("price = ?");
                valores.push(update.price);
            }

            if (campos.length === 0) {
                throw new Error("Nenhum campo para atualizar.");
            }

            const sql = `UPDATE vendas.Product SET ${campos.join(", ")} WHERE id = ?`;
            valores.push(id);

            const resultado = executarComandoSQL(sql, valores, this.imprimeResult);

            console.log("Produto atualizado com sucesso! ", resultado);
        } catch(err){
            console.error("Este produto não foi atualizado, tente novamente!", err);
        }
    }

    
}
