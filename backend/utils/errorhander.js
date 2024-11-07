//this whole code is only for error handling in backend
class ErrorHander extends Error {
  constructor(message, statuscode) {
    super(message);
    this.statusCode = this.statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}
module.exports = ErrorHander;
