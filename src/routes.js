import { Router } from 'express';

import OngsController from './app/controllers/OngsController';
import IncidentController from './app/controllers/IncidentController';

const routes = Router();

routes.post('/ongs', OngsController.store);
routes.get('/ongs', OngsController.index);

routes.post('/incidents', IncidentController.store);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.destroy);

export default routes;
