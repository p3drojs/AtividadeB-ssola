import { Router } from 'express';
import receitasRoutes from './receitaRoutes';

const routes = Router();

routes.use(receitasRoutes);

export default routes;