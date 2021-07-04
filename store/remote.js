const request = require("request");

class RemoteConnection {
  constructor(host, port, secureProtocol = false) {
    const protocol = secureProtocol ? "https" : "http";
    this.host = host;
    this.port = port;
    this.URL = `${protocol}://${this.host}:${this.port}`;
  }

  list(table) {
    return this.req("GET", table);
  }

  get(table, id) {}

  upsert(table, id, isNew) {}

  query(table, query, join) {}

  req(method, table, data) {
    const url = `${this.URL}/${table}`;
    const body = data;
    return new Promise((resolve, reject) => {
      request(
        url,
        {
          method,
          headers: {
            "Content-Type": "application/json",
          },
          url,
          body,
        },
        (err, req, body) => {
          if (err) return reject(err);
          const res = JSON.parse(body);
          resolve(res.body);
        }
      );
    });
  }
}

module.exports = RemoteConnection;
