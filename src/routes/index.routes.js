import { Router } from 'express';

import health from './health.routes';
import swagger from './swagger.routes';

module.exports = server => {
  server.use((req, res, next) => {
    health(server, new Router());
    swagger(server, new Router());
    next();
  });
};
