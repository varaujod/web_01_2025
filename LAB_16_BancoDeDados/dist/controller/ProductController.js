"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const ProductService_1 = require("../service/ProductService");
class ProductController {
    productService = new ProductService_1.ProductService();
    async insertProduct(req, res) {
        try {
            const product = await this.productService.insertProduct(req.body);
            res.status(201).json(product);
        }
        catch (err) {
            const message = err instanceof Error ? err.message : 'Não foi possivel criar o Produto!';
            res.status(400).json({
                message: message
            });
        }
    }
    async deleteProduct(req, res) {
        try {
            const id = Number(req.params.id);
            const product = await this.productService.deleteProduct(id);
            res.status(200).json({
                "status": "Produto deletado com sucesso!",
                "product": product
            });
        }
        catch (err) {
            const message = err instanceof Error ? err.message : 'Não foi possivel deletar o Produto!';
            res.status(400).json({
                message: message
            });
        }
    }
    async updateProduct(req, res) {
        try {
            const successUpdate = await this.productService.updateProduct({
                id: Number(req.params.id),
                update: req.body
            });
            res.status(200).json({
                "message": "Produto atualizado com sucesso!",
                "product": successUpdate
            });
        }
        catch (err) {
            const message = err instanceof Error ? err.message : 'Não foi possivel atualizar o Produto!';
            res.status(400).json({
                message: message
            });
        }
    }
}
exports.ProductController = ProductController;
