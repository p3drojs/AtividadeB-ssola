import type { ingrediente } from "./ingrediente"

export type receita = {
    nome: string,
    tempoPreparo: number,
    custoAproximado: number,
    ingredientes: ingrediente[]
};