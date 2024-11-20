class ApiError extends Error {
  constructor(statusCode, message, isOprational = true, stack = '') {
    super(message);
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
    this.statusCode = statusCode;
    this.isOprational = isOprational;
  }
}

export default ApiError;
