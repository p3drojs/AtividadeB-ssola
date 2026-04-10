import { Router } from 'express';
import { getAllReceitas, adicionaringrediente, cadastrarReceita, removerIngrediente, removerReceita, getUmaReceita, getAllIngredientes } from '../controller/receitasController';

const receitasRoutes = Router();

receitasRoutes.get('/receitas', getAllReceitas);
receitasRoutes.post('/receitas', cadastrarReceita);
receitasRoutes.put('/addIngrediente/:receitaId', adicionaringrediente);
receitasRoutes.delete('/receitasRemove/:receitaId', removerIngrediente);
receitasRoutes.get('/ingredientes', getAllIngredientes)
receitasRoutes.delete('/receita/:id', removerReceita);
receitasRoutes.get('/receitas/:id', getUmaReceita);

export default receitasRoutes;
