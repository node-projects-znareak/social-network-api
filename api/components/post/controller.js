const TABLE = "posts";
module.exports = (store = require("../../../store/dummy")) => {
  return {
    list() {
      return store.list(TABLE);
    },
  };
};
