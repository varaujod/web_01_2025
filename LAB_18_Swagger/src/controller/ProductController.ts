import { ProductService } from "../service/ProductService";
import { Request, Response } from "express";
import { Body, Controller, Delete, Get, Path, Post, Put, Query, Res, Route, Tags, TsoaResponse  } from "tsoa";
import { BasicResponseDto } from "../model/BasicResponseDto";
import { ProductDto } from "../model/ProductDto";

@Route("product")
@Tags("Product")
export class ProductController extends Controller{
    productService = new ProductService();

    @Post()
    async insertProduct(
        @Body() dto: ProductDto,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<201, BasicResponseDto>
    ): Promise< |void>{
        try{
            const product = await this.productService.insertProduct(dto);
            return success(201, new BasicResponseDto("Produto criado com sucesso!", product));
        } catch(error: any){
            return fail(400, new BasicResponseDto(error.message, undefined));
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