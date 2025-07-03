"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ProductController_1 = require("./controller/ProductController");
const productController = new ProductController_1.ProductController();
const app = (0, express_1.default)();
const PORT = process.env.PORT ?? 8080;
app.use(express_1.default.json());
function logInfo() {
    console.log(`API em execucao no URL: http://localhost:${PORT}`);
}
app.post("/market/product", productController.insertProduct.bind(productController));
app.put("/market/product/:id", productController.updateProduct.bind(productController));
app.delete("/market/product/:id", productController.deleteProduct.bind(productController));
app.listen(PORT, logInfo);
