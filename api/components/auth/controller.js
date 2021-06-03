const { sign } = require("../../../auth");
const bcrypt = require("bcrypt");
const { error } = require("../../../network/response");

module.exports = (store = require("../../../store/dummy")) => {
  const TABLE = "auth";
  return {
    async upsert(payload) {
      const { password, username, id } = payload;
      const authPayload = { id };
      if (username) authPayload.username = username;
      if (password) authPayload.password = await bcrypt.hash(password, 6);
      return store.upsert(TABLE, authPayload);
    },

    async login(username, password, res) {
      try {
        const data = store.query(TABLE, { username });
        const compare = await bcrypt.compare(password, data.password);
        if (compare) return sign(data);
        else return "Invalid payload";
      } catch (err) {
        error(null, res, "Verifique los campos: 'username' y 'password'", 400);
      }
    },
  };
};
