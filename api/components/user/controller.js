const { nanoid } = require("nanoid");
const auth = require("../auth");
const TABLE = "users";
const TABLE_FOLLOW = TABLE + "_follow";
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

    follow(from, to) {
      return store.upsert(
        TABLE_FOLLOW,
        {
          user_from: from,
          user_to: to,
        },
        true
      );
    },

    followers(id) {
      const join = { [TABLE]: "user_to" };
      const query = { user_from: id };
      return store.query(TABLE_FOLLOW, query, join);
    },

    remove(id) {
      return store.remove(TABLE, id);
    },
  };
};
