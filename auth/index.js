const jwt = require("jsonwebtoken");
module.exports = {
  sign(payload) {
    return jwt.sign(payload, "string_secreto");
  },
};
