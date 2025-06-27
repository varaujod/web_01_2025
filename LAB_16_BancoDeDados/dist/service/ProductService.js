"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const Product_1 = require("../model/Product");
const ProductRepository_1 = require("../repository/ProductRepository");
class ProductService {
    productRepository = new ProductRepository_1.ProductRepository();
    createTable() {
        this.productRepository.createTable();
    }
    insertProduct(data) {
        const newProduct = new Product_1.Product(undefined, data.name, data.price);
        this.productRepository.insertProduct(newProduct);
        return newProduct;
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
