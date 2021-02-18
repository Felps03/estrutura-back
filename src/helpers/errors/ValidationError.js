class ValidationError extends Error {
  constructor(error, status) {
    // Calling parent constructor of base Error class.
    super(error);

    // Saving class name in the property of the custom error as a shortcut.
    this.name = this.constructor.name;
    // Capturing stack trace, excluding constructor call from it.
    Error.captureStackTrace(this, this.constructor);

    // You can use any additional properties you want.
    // I'm going to use preferred HTTP status for this error types.
    // `500` is the default value if not specified.
    this.type = 'Validation Error';
    this.message = error.details[0].message;
    this.details = { path: error.details[0].path, type: error.details[0].type, context: error.details[0].context };
    this.status = status || 500;
  }
}

module.exports = ValidationError;
