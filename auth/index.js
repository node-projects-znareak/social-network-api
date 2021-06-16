const jwt = require("jsonwebtoken");
const config = require("../config");

const auth = {
  sign(payload) {
    return jwt.sign(payload, config.JWT_SECRET);
  },

  getToken(auth) {
    if (!auth) throw new Error("There not authorization header!");
    if (auth.indexOf("Bearer ") == -1) throw new Error("Invalid token format!");
    const token = auth.replace("Bearer ", "");
    return token;
  },

  verify(token) {
    return jwt.verify(token, config.JWT_SECRET);
  },

  decode(req) {
    const auth = req.headers.authorization || "";
    const token = this.getToken(auth);
    const isValid = this.verify(token);
    return isValid;
  },

  check: {
    own(req, owner) {
      const decode = auth.decode(req);
      console.log(decode);

      if (decode.id !== owner) throw new Error("Forbbiden for this client!");
    },

    logged(req) {
      const decode = auth.decode(req);
      req.user = {
        id: decode.id,
      };
    },
  },
};

module.exports = auth;
