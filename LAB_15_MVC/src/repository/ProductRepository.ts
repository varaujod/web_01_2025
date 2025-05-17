import { Product } from "../model/Product";

export class ProductRepository{
    private static instance: ProductRepository;
    private productList: Product[] = [];

    private constructor() {}

    public static getInstance(): ProductRepository {
        if(!this.instance){
            this.instance = new ProductRepository();
        }
        return this.instance;
    }

    insereProduto(product: Product){
        this.productList.push(product);
    }

    filtraProdutoPorId(id: number): Product | undefined{
        return this.productList.find(product => product.id ===  id);
    }

    filtraTodosProdutos(): Product[]{
        return this.productList;
    }
}