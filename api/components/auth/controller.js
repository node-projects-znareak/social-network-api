const { sign } = require("../../../auth");

module.exports = (store = require("../../../store/dummy")) => {
  const TABLE = "auth";
  return {
    upsert(payload) {
      const { password, username, id } = payload;
      const authPayload = { id };
      if (username) authPayload.username = username;
      if (password) authPayload.password = password;

      return store.upsert(TABLE, authPayload);
    },

    login(username, password) {
      const data = store.query(TABLE, { username });
      if (data.password === password) {
        return sign(data);
      }
      throw new Error("Información invalida");
    },
  };
};
