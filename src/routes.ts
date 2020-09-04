import { Router } from 'express';
import SessionController from './controllers/UserController';
const routes = Router();

// routes.post('/users', (request, response) => {
//   const { name, email } = request.body;

//   const user = {
//     name,
//     email,
//   };

//   return response.json(user);
// });

routes.post('/users', SessionController.store);

export default routes;
