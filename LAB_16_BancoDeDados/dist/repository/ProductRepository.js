"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const mysql_1 = require("../database/mysql");
const Product_1 = require("../model/Product");
class ProductRepository {
    static instance;
    constructor() {
        this.createTable();
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new ProductRepository();
        }
        return this.instance;
    }
    async createTable() {
        const query = `CREATE TABLE IF NOT EXISTS Vendas.Product(
                            id INT AUTO_INCREMENT PRIMARY KEY, 
                            name VARCHAR(255) NOT NULL, 
                            price DECIMAL(10,2) NOT NULL
                        )`;
        try {
            const resultado = await (0, mysql_1.executarComandoSQL)(query, []);
            console.log('Tabela criada com Sucesso', resultado);
        }
        catch (err) {
            console.error('Erro ao executar a query: ', err);
        }
    }
    async insertProduct(name, price) {
        const resultado = await (0, mysql_1.executarComandoSQL)("INSERT INTO vendas.Product (name, price) values (?, ?)", [name, price]);
        console.log('Produto Inserido com sucesso: ', resultado);
        return new Product_1.Product(resultado.insertId, name, price);
    }
    async deleteProduct(id) {
        const resultado = await (0, mysql_1.executarComandoSQL)("DELETE FROM vendas.Product WHERE id = ?", [id]);
        console.log('Produto deletado com Sucesso!', resultado);
        return resultado.affectedRows > 0;
    }
    async updateProduct(id, update) {
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
        const resultado = await (0, mysql_1.executarComandoSQL)(sql, valores);
        console.log("Produto atualizado com sucesso! ", resultado);
        return resultado.affectedRows > 0;
    }
}
exports.ProductRepository = ProductRepository;
