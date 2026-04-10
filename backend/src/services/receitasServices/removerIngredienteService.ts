import { prisma } from '../../prisma';

export const removerIngredienteService = async(ingredinteId: number) => {
    const ingrediente = prisma.receitas.delete({
        where:{
            id: ingredinteId
        }
    })
    return ingrediente;
}