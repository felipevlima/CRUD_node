import { Router } from 'express';
import SessionController from './controllers/UserController';
const routes = Router();

/**
 * User CRUD
 */
routes.post('/users', SessionController.store);
routes.get('/users', SessionController.index);
routes.put('/users/:id', SessionController.update);
routes.delete('/users/:id', SessionController.delete);

export default routes;
