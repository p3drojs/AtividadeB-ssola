import { prisma } from '../../prisma';
import { receita } from '../../types/receita'

export const getUmaReceitaService = async(receitaId: number):Promise<receita | null> => {
    const receita = prisma.receitas.findUnique({
        where:{
            id: receitaId
        }
    });
    return receita;
}