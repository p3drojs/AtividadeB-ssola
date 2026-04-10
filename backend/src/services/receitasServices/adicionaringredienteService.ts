import { ingrediente } from '../../types/ingrediente';
import { prisma } from '../../prisma';

export const adicionaringredienteService = async(receitaId:number, ingrediente:ingrediente ):Promise<ingrediente> => {
    const newIngrediente = prisma.ingredientes.create({
        data:{
            nome: ingrediente.nome,
            receitaId: receitaId
        }
    });
    return newIngrediente;
}