export class Product{
    id: number;
    name: string;
    description: string;
    price: number;

    constructor(name:string, description:string, price: number){
        this.id = this.geraId();
        this.name = name;
        this.description = description;
        this.price = price;
    }

    private geraId(): number{
        return Date.now();
    }
}