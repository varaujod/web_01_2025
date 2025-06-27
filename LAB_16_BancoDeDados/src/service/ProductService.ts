import { Product } from "../model/Product";
import { ProductRepository } from "../repository/ProductRepository";

export class ProductService{
    
    private productRepository: ProductRepository = new ProductRepository();

    createTable(){
        this.productRepository.createTable();
    }

    insertProduct(data: any): Product{
        const newProduct = new Product(undefined, data.name, data.price);
        this.productRepository.insertProduct(newProduct);
        return newProduct;
    }

    deleteProduct(id: number){
        return this.productRepository.deleteProduct(id);
    }

    updateProduct(data: any){
        const id = data.id;
        const update = data.update;

        return this.productRepository.updateProduct(id, update);
    }

}