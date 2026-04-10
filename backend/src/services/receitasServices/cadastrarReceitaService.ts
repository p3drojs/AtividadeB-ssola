import { prisma } from '../../prisma';
import { receita } from "../../types/receita";

export const cadastrarReceitaService = async( receita:receita ):Promise<receita> => {
    const newReceita = await prisma.receitas.create({
        data:{
            nome: receita.nome,
            tempoPreparo: receita.tempoPreparo,
            custoAproximado: receita.custoAproximado
        }
    });

    return newReceita;
}