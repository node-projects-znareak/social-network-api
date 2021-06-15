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

    async upsert(payload, isNew = false) {
      const user = {
        name: payload.name,
        username: payload.username,
      };

      if (!user.id) user.id = nanoid();

      // Save the new user in the auth table
      if (payload.password || user.username) {
        await auth.upsert({
          id: user.id,
          name: user.name,
          username: user.username,
          password: payload.password,
        });
      }

      return store.upsert(TABLE, user, isNew);
    },

    update(id, payload) {
      const user = store.update(TABLE, payload, id);
      return user;
    },

    remove(id) {
      return store.remove(TABLE, id);
    },
  };
};
