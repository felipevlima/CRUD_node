import { Router } from 'express';
import SessionController from './controllers/UserController';
import SmartphoneController from './controllers/SmartphoneController';

const smartController = new SmartphoneController();

const routes = Router();

/**
 * User CRUD
 */
routes.post('/users', SessionController.store);
routes.get('/users', SessionController.index);
routes.put('/users/:id', SessionController.update);
routes.delete('/users/:id', SessionController.delete);

// -=-=- Smartphone CRUD -=-=-
routes.post('/smartphone', smartController.insert );
routes.get('/smartphone', smartController.list );
routes.put('/smartphone/:id', smartController.udpate );
routes.delete('/smartphone/:id', smartController.delete );


export default routes;
