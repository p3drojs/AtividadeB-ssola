import { Router } from 'express';
import { getAllReceitas, adicionaringrediente, cadastrarReceita, removerIngrediente, removerReceita, getUmaReceita } from '../controller/receitasController';

const receitasRoutes = Router();

receitasRoutes.get('/receitas', getAllReceitas);
receitasRoutes.post('/receitas', cadastrarReceita);
receitasRoutes.put('/receitas', adicionaringrediente);
receitasRoutes.put('/receitasRemove', removerIngrediente);
receitasRoutes.delete('/receita', removerReceita);
receitasRoutes.get('/receitas/:id', getUmaReceita);

export default receitasRoutes;
