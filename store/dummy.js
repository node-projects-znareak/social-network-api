const db = {
  users: [{ id: "1", name: "carlos", username: "codeCarlos" }],
  auth: [],
};

function list(table) {
  return db[table];
}

function get(table, id) {
  const collection = list(table);
  const user = collection.find((user) => user.id === id);
  return user || {};
}

function remove(table, id) {
  const collection = list(table);
  const userToDelete = get(table, id);
  let newDb = collection.filter((user) => user.id !== id);
  console.log(newDb);
  db.users = newDb;
  return userToDelete;
}

function upsert(table, data) {
  const collection = list(table);
  collection.push(data);

  console.log(db);
  return data;
}

function query(table, queryObj) {
  const collection = list(table);
  const keys = Object.keys(queryObj);
  const prop = keys[0];
  const queryFounded = collection.find((item) => {
    return item[prop] === queryObj[prop] || null;
  });

  return queryFounded;
}

module.exports = {
  list,
  get,
  remove,
  upsert,
  query,
};
