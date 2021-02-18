class JwtError extends Error {
  constructor(message, status) {
    // Calling parent constructor of base Error class.
    super(message);
    // Saving class name in the property of the custom error as a shortcut.
    this.name = this.constructor.name;
    // Capturing stack trace, excluding constructor call from it.
    Error.captureStackTrace(this, this.constructor);

    // You can use any additional properties you want.
    // I'm going to use preferred HTTP status for this error types.
    // `500` is the default value if not specified.
    this.message = message;
    this.status = status || 500;
  }
}
module.exports = JwtError;
