import express from "express";
import { ProductController } from "./controller/ProductController";
import { ProductRepository } from "./repository/ProductRepository";

const productController = new ProductController();

const app = express();

const PORT = process.env.PORT ?? 8080;
app.use(express.json());

function logInfo(){
    console.log(`API em execucao no URL: http://localhost:${PORT}`);
}

app.post("/market/product", productController.insertProduct.bind(productController));
app.put("/market/product/:id", productController.updateProduct.bind(productController));
app.delete("/market/product/:id", productController.deleteProduct.bind(productController));

app.listen(PORT, logInfo);