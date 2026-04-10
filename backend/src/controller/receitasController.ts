import { getUmaReceitaService } from './../services/receitasServices/getUmaReceitaService';
import { removerIngredienteService } from './../services/receitasServices/removerIngredienteService';
import { removerReceitaService } from './../services/receitasServices/removerReceitaService';
import { cadastrarReceitaService } from './../services/receitasServices/cadastrarReceitaService';
import { getAllReceitasService } from './../services/receitasServices/getAllReceitasService';
import { adicionaringredienteService } from '../services/receitasServices/adicionarIngredienteService';
import { getAllIngredientesService } from '../services/receitasServices/getAllIngredientesService';
import { Request, Response  } from 'express';

export const getAllReceitas = async(req: Request, res: Response):Promise<Response> => {    
    const receitas = await getAllReceitasService();
    return res.status(200).json(receitas);
}

export const cadastrarReceita = async (req: Request, res: Response):Promise<Response> => {
    const payload = req.body;
    const newReceita = cadastrarReceitaService(payload);
    return res.status(200).json(newReceita);
}

export const removerReceita = async(req: Request, res: Response):Promise<Response> => {
    const receitaId = Number(req.params.id);
    await removerReceitaService(receitaId);
    return res.status(200).json(("Deletado!"));
}

export const adicionaringrediente = async(req: Request, res: Response):Promise<Response> => {
    const payload = req.body;
    const receitaId = Number(req.params.id)
    const newIngrediente = adicionaringredienteService(receitaId, payload);
    return res.status(200).json(newIngrediente);
}

export const removerIngrediente = async(req: Request, res: Response):Promise<Response> => {
    const ingredienteId = Number(req.params.id);
    await removerIngredienteService(ingredienteId);
    return res.status(200).json(("Deletado!"));
}

export const getUmaReceita = async(req: Request, res: Response):Promise<Response> => {
    const receitaId = Number(req.params.id);
    const receita = getUmaReceitaService(receitaId);
    return res.status(200).json(receita);
}

export const getAllIngredientes = async(req: Request, res: Response):Promise<Response> => {
    const ingredientes = await getAllIngredientesService();
    return res.status(200).json(ingredientes);
}