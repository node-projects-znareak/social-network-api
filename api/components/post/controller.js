const { nanoid } = require("nanoid");
const TABLE = "posts";

module.exports = (store = require("../../../store/mysql")) => {
  return {
    list() {
      return store.list(TABLE);
    },

    get(id) {
      return store.get(TABLE, id);
    },

    upsert(payload) {
      payload.id = nanoid();
      return store.upsert(TABLE, payload, true);
    },

    update(id, payload) {
      const postEdited = store.update(TABLE, payload, id);
      return postEdited;
    },
  };
};
