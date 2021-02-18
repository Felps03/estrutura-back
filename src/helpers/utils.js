import moment from 'moment-timezone';

import { Exception, ErrorDefinitions } from './errors';

const {
  HttpStatusCode: { SERVER_INTERNAL_ERROR },
  CustomErrorMessages: { MONGODB_ERROR }
} = require('./enums');

const utils = {
  mongoBrazilianTimezone() {
    return moment.tz(Date.now(), 'America/Sao_Paulo').subtract(3, 'hour');
  },

  brazilianTimeZone() {
    return moment.tz(Date.now(), 'America/Sao_Paulo');
  },

  getStatusCode(error) {
    return error.status || SERVER_INTERNAL_ERROR;
  },

  formatError(error) {
    if (error.name === 'MongoError') {
      return Exception.raise({
        ...ErrorDefinitions(error.status),
        detail: { motive: MONGODB_ERROR }
      });
    }
    if (error.name === 'RequestError') {
      return Exception.raise({
        ...ErrorDefinitions(error.status),
        detail: { motive: error.message, options: error.options }
      });
    }

    if (error.name === 'JsonWebTokenError') {
      return Exception.raise({ ...ErrorDefinitions(error.status || 401), detail: { motive: error.message } });
    }
    // ValidationError
    return Exception.raise({
      ...ErrorDefinitions(error.status),
      detail: { errorType: error.type, motive: error.message, extra: error.details }
    });
  },

  escapeRegExp(string) {
    return string.replace(/[.*+?@#&¨%\!\-='^${}()|[\]\\]/g, '\\$&');
  },

  cleanEmpty(obj) {
    /* eslint no-return-assign: */
    if (Array.isArray(obj)) {
      return obj.map(v => (v && typeof v === 'object' ? utils.cleanEmpty(v) : v)).filter(v => !(v == null));
    }
    return Object.entries(obj)
      .map(([k, v]) => [k, v && typeof v === 'object' ? utils.cleanEmpty(v) : v])
      .reduce((a, [k, v]) => (v == null ? a : ((a[k] = v), a)), {});
    /* eslint no-return-assign: */
  },

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
};

module.exports = utils;
