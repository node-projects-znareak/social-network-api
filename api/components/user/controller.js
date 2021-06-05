const { nanoid } = require("nanoid");
const auth = require("../auth");
const TABLE = "users";

module.exports = (store = require("../../../store/dummy")) => {
  return {
    list() {
      return store.list(TABLE);
    },

    get(id) {
      return store.get(TABLE, id);
    },

    upsert(payload) {
      const user = {
        name: payload.name,
        username: payload.username,
      };

      if (!user.id) user.id = nanoid();

      // Save the new user in the auth table
      if (payload.password || user.username) {
        auth.upsert({
          id: user.id,
          name: user.name,
          username: user.username,
          password: payload.password,
        });
      }

      return store.upsert(TABLE, user);
    },

    update(id, payload) {
      const user = store.update(TABLE, id, payload);
      return user;
    },

    remove(id) {
      return store.remove(TABLE, id);
    },
  };
};
