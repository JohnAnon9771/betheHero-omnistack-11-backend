import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  console.log('Hello world');
});

export default routes;
