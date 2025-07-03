export class ProductDto{
    name: string;
    price: number;
    expirationDate: string;

    constructor(name?: string, price?: number, expirationDate?: string){
        this.name = name || '';
        this.price = price || 0;
        this.expirationDate = (expirationDate || '');
    }
}