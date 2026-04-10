import { ingrediente } from '../../types/ingrediente';
import { prisma } from '../../prisma';

export const getAllIngredientesService = async():Promise<ingrediente[]> => {
    const Ingredientes = prisma.ingredientes.findMany();
    return Ingredientes;
}