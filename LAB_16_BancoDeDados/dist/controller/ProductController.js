"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const ProductService_1 = require("../service/ProductService");
class ProductController {
    productService = new ProductService_1.ProductService();
    insertProduct(req, res) {
        try {
            const table = this.productService.createTable();
            const product = this.productService.insertProduct(req.body);
            console.log(table);
            res.status(201).json(product);
        }
        catch (error) {
            let message = "Não foi possivel criar Product!";
            if (error instanceof Error) {
                message = error.message;
            }
            res.status(400).json({
                message: message
            });
        }
    }
    deleteProduct(req, res) {
        try {
            const id = Number(req.params.id);
            const product = this.productService.deleteProduct(id);
            res.status(200).json({
                "status": "Produto deletado com sucesso!",
                "product": product
            });
        }
        catch (error) {
            let message = "Não foi possivel realizar a remoção";
            if (error instanceof Error) {
                message = error.message;
            }
            res.status(400).json({
                message: message
            });
        }
    }
    updateProduct(req, res) {
        try {
            const successUpdate = this.productService.updateProduct({
                id: Number(req.params.id),
                update: req.body
            });
            res.status(200).json(successUpdate);
        }
        catch (error) {
            let message = "Não foi possivel realizar a atualização";
            if (error instanceof Error) {
                message = error.message;
            }
            res.status(400).json({
                message: message
            });
        }
    }
}
exports.ProductController = ProductController;
