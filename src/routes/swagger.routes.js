import swaggerUi from 'swagger-ui-express';

import swaggerDocument from '../../swagger/swagger.json';
import { logger } from '../helpers';

module.exports = (server, routes, prefix = '/api-docs') => {
  logger.info('Routes - Swagger - OK');

  routes.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  server.use(prefix, routes);
};
