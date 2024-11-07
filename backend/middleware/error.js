const ErrorHandler = require("../utils/errorhander");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  //Wrong Mongodb Id error
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid : ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  console.log("Status Code: ", err.statusCode); // Ensure this is not undefined

  //Mongoose duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHandler(message, 400);
  }

  console.log("Status Code: ", err.statusCode); // Ensure this is not undefined

  // wrong JWT error
  if (err.name === "JsonWebTokenError") {
    const message = `Json web token is invalid, try again`;
    err = new ErrorHandler(message, 400);
  }

  //JWT EXPIRE error
  if (err.name === "TokenExpiredError") {
    const message = `Json web token is Expired, Try again`;
    err = new ErrorHandler(message, 400);
  }

  // Log the error for debugging purposes
  console.log("Error details: ", err);

  // If for some reason `statusCode` is still undefined, default it to 500
  if (!err.statusCode) {
    err.statusCode = 500;
  }

  //send the error response
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
