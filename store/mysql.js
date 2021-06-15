const mysql = require("mysql");
const mysqlConfig = require("../config").mysql;
let connection = null;
let tries = 1;

function handleConnection() {
  connection = mysql.createConnection(mysqlConfig);
  const onConnection = (err) => {
    if (err) {
      console.error("[mysql error]", err);
      const timeId = setTimeout(() => {
        if (tries === 4) return clearTimeout(timeId);
        handleConnection();
        console.log(`Reconnecting to mysql server {${tries}}...`);
        tries++;
      }, 3000);
    } else {
      console.log("DB CONNECTED!");
    }
  };

  connection.connect(onConnection);
  connection.on("error", (err) => {
    if (err.code === "PROTOCOL_CONNECTION_LOST") return onConnection(err);
    throw new Error(err);
  });
}

handleConnection();

function list(table) {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${table}`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
}

function get(table, id) {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${table} WHERE id='${id}'`, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
}

function insert(table, data) {
  return new Promise((resolve, reject) => {
    connection.query(`INSERT INTO ${table} SET ?`, data, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
}

function update(table, data) {
  return new Promise((resolve, reject) => {
    connection.query(
      `UPDATE TABLE ${table} SET ? WHERE id=?`,
      [data, data.id],
      (err, result) => {
        if (err) return reject(err);
        resolve(result);
      }
    );
  });
}

function query(table, q) {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${table} WHERE ?`, q, (err, result) => {
      if (err) return reject(err);
      let output = null;
      if (result.length > 0) output = { ...result[0] };
      resolve(output);
    });
  });
}

function upsert(table, data, isNew) {
  if (data && isNew) return insert(table, data);
  return update(table, data);
}

module.exports = {
  list,
  get,
  upsert,
  update,
  query,
};
