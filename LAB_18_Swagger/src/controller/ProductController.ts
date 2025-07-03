import { ProductService } from "../service/ProductService";
import { Request, Response } from "express";

export class ProductController{
    private productService = new ProductService();

    async insertProduct(req: Request, res: Response){
        try{
            const product = await this.productService.insertProduct(req.body);
            res.status(201).json(product);
        } catch(err){
            const message = err instanceof Error ? err.message: 'Não foi possivel criar o Produto!';
            res.status(400).json({
                message: message
            });
        }
    }

    async deleteProduct(req: Request, res: Response) {
        try{
            const id = Number(req.params.id);
            const product = await this.productService.deleteProduct(id);

            res.status(200).json({
                "status": "Produto deletado com sucesso!",
                "product": product
            })
        } catch(err){
            const message = err instanceof Error ? err.message: 'Não foi possivel deletar o Produto!';
            res.status(400).json({
                message: message
            });
        }
    }

    async updateProduct(req: Request, res: Response){
        try{
            const successUpdate = await this.productService.updateProduct({
                id: Number(req.params.id),
                update: req.body
            });

            res.status(200).json({
                "message": "Produto atualizado com sucesso!",
                "product": successUpdate
            }
                );
        } catch(err){
            const message = err instanceof Error ? err.message: 'Não foi possivel atualizar o Produto!';
            res.status(400).json({
                message: message
            });
        }
    }
}