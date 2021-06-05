const { error } = require("./response");

function errors(err, req, res, next) {
  console.error("[!]", err);
  const message = err.message;
  const status = err.statusCode;
  error(req, res, message, status);
}

module.exports = errors;
