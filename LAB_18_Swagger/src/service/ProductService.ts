import { Product } from "../model/Product";
import { ProductRepository } from "../repository/ProductRepository";

export class ProductService{
    private productRepository = ProductRepository.getInstance();

    insertProduct(data: any): Promise<Product>{
        if(!data.name || !data.price){
            throw new Error('Favor informar os campos obrigatórios');
        }
        return this.productRepository.insertProduct(data.name, data.price);
    }

    deleteProduct(id: number): Promise<boolean>{
        return this.productRepository.deleteProduct(id);
    }

    updateProduct(data: any): Promise<boolean>{
        const id = data.id;
        const update = data.update;

        return this.productRepository.updateProduct(id, update);
    }

}