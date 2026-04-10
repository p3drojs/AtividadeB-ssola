import { prisma } from '../../prisma';
import { receita } from '../../types/receita'

export const getAllReceitasService = async():Promise<receita[]> => {
    const receitas = prisma.receitas.findMany();
    return receitas;
}