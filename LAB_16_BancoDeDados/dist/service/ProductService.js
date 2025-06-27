"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const ProductRepository_1 = require("../repository/ProductRepository");
class ProductService {
    productRepository = ProductRepository_1.ProductRepository.getInstance();
    insertProduct(data) {
        if (!data.name || !data.price) {
            throw new Error('Favor informar os campos obrigatórios');
        }
        return this.productRepository.insertProduct(data.name, data.price);
    }
    deleteProduct(id) {
        return this.productRepository.deleteProduct(id);
    }
    updateProduct(data) {
        const id = data.id;
        const update = data.update;
        return this.productRepository.updateProduct(id, update);
    }
}
exports.ProductService = ProductService;
