import { Request, Response } from "express";
import { ProductService } from "../service/ProductService";

const productService = new ProductService();

export function cadastrarProduto(req: Request, res: Response){
    try {
        const novoProduto = productService.cadastrarProduto(req.body);
        res.status(201).json(
            {
                mensagem: "Produto adicionado com sucesso!",
                produto: novoProduto
            }
        );
    } catch(error: any) {
        res.status(400).json({message: error.message});
    }
};

export function pesquisarProdutoPorID(req: Request, res: Response){
    try{
        const novaPesquisa = productService.consultarProduto(req.params.id);
        res.status(201).json(
            {
                mensagem: "Pesquisa realizada com sucesso!",
                pesquisa: novaPesquisa
            }
        );
    } catch(error: any){
        res.status(400).json({message: error.message});
    }
};

export function listaProdutos(req: Request, res: Response){
    try{
        const novaListagem = productService.getProducts();
        res.status(201).json(
            {
                mensagem: "Lista de todos os produtos",
                lista: novaListagem
            }
        );
    } catch(error: any){
        res.status(400).json({message: error.message});
    }
};
