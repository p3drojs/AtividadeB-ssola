import { prisma } from '../../prisma';

export const removerReceitaService = async(receitaId: number) => {
    const receita = prisma.receitas.delete({
        where:{
            id: receitaId
        }
    })
    return receita;
}