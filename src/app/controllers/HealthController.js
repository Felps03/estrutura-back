import { logger } from '../../helpers';

const {
  HttpStatusCode: { OK }
} = require('../../helpers/enums');

class HealthController {
  async index(req, res) {
    logger.info('HealthController - Index - OK');

    return res.status(OK).json({ message: 'Welcome to Sis Digital' });
  }
}

export default new HealthController();
