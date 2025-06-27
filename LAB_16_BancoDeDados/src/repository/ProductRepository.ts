import { executarComandoSQL } from "../database/mysql";
import { Product } from "../model/Product";

export class ProductRepository{
    private static instance: ProductRepository;

    private constructor() {
        this.createTable();
    }

    public static getInstance(): ProductRepository{
        if(!this.instance){
            this.instance = new ProductRepository();
        }

        return this.instance;
    }

    private async createTable() {
        const query = `CREATE TABLE IF NOT EXISTS Vendas.Product(
                            id INT AUTO_INCREMENT PRIMARY KEY, 
                            name VARCHAR(255) NOT NULL, 
                            price DECIMAL(10,2) NOT NULL
                        )`

        try {
            const resultado = await executarComandoSQL(query, []);
            console.log('Tabela criada com Sucesso', resultado);
        } catch (err) {
            console.error('Erro ao executar a query: ', err);
        }
    }

    async insertProduct(name: string, price: number): Promise<Product>{
        const resultado = await executarComandoSQL(
            "INSERT INTO vendas.Product (name, price) values (?, ?)", 
            [name, price]);
        console.log('Produto Inserido com sucesso: ', resultado);
        return new Product(resultado.insertId, name, price);
    }

    async deleteProduct(id: number): Promise<boolean>{
        const resultado = await executarComandoSQL(
            "DELETE FROM vendas.Product WHERE id = ?",
            [id]);
        console.log('Produto deletado com Sucesso!', resultado);
        return resultado.affectedRows > 0;
    }

    async updateProduct(id: number, update: any): Promise<boolean>{
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

        const resultado = await executarComandoSQL(sql, valores);

        console.log("Produto atualizado com sucesso! ", resultado);

        return resultado.affectedRows > 0;
    }


}
