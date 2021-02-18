const {
  HttpStatusCode: { BAD_REQUEST, CONFLICT, UNAUTHORIZED, NOT_FOUND, SERVER_INTERNAL_ERROR, SERVICE_UNAVAILABLE }
} = require('../enums');

const DetailedDefinition = Object.freeze({
  400: {
    key: 'BAD_REQUEST_PARAMETER',
    statusCode: BAD_REQUEST,
    message: `The request couldn't be accepted due malformed request syntax.`
  },
  409: {
    key: 'CONFLICT_PARAMETER',
    statusCode: CONFLICT,
    message: `The request couldn't be accepted due a conflict with current state of the server.`
  },
  401: {
    key: 'UNAUTHORIZED',
    statusCode: UNAUTHORIZED,
    message: `The request has not been applied because it lacks valid authentication credentials for the target resource.`
  },
  404: {
    key: 'NOT_FOUND',
    statusCode: NOT_FOUND,
    message: `The request couldn't be accepted because the requested resource couldn't be founded.`
  },
  500: {
    key: 'SERVER_INTERNAL_ERROR',
    statusCode: SERVER_INTERNAL_ERROR,
    message: `The request couldn't be fulfilled due to an Internal Server Error.`
  },
  501: {
    key: 'SERVICE_UNAVAILABLE',
    statusCode: SERVICE_UNAVAILABLE,
    message: `The current service is unavailable.`
  }
});

const ErrorDefinitions = status => {
  const SpecificDefinition = DetailedDefinition[status];
  if (!SpecificDefinition) {
    return DetailedDefinition[500];
  }
  return SpecificDefinition;
};

module.exports = ErrorDefinitions;
