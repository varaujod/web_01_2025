import { ProductService } from "../service/ProductService";
import { Request, Response } from "express";

export class ProductController{
    private productService = new ProductService();

    insertProduct(req: Request, res: Response): void{
        try{
            const table = this.productService.createTable();
            const product = this.productService.insertProduct(req.body);

            console.log(table);
            res.status(201).json(product);
        } catch(error: unknown){
            let message: string = "Não foi possivel criar Product!"
            if(error instanceof Error){
                message = error.message
            }
            res.status(400).json({
                message: message
            })
        }
    }

    deleteProduct(req: Request, res: Response): void{
        try{
            const id = Number(req.params.id);
            const product = this.productService.deleteProduct(id);

            res.status(200).json({
                "status": "Produto deletado com sucesso!",
                "product": product
            })
        } catch(error: unknown){
            let message: string = "Não foi possivel realizar a remoção";
            if(error instanceof Error){
                message = error.message;
            }
            res.status(400).json({
                message: message
            })
        }
    }

    updateProduct(req: Request, res: Response): void{
        try{
            const successUpdate = this.productService.updateProduct({
                id: Number(req.params.id),
                update: req.body
            });

            res.status(200).json(successUpdate);
        } catch(error: unknown){
            let message: string = "Não foi possivel realizar a atualização";
            if(error instanceof Error){
                message = error.message;
            }
            res.status(400).json({
                message: message
            })
        }
    }
}