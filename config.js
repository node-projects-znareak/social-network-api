const env = process.env;

module.exports = {
  api: {
    port: env.API_PORT || 4000,
  },
  JWT_SECRET: env.JWT_SECRET || "RGGJLnuiHS6EWZxZUAujxI2Jqqrq8z3TNNcGSjJK",

  mysql: {
    host: env.HOST || "localhost",
    user: env.USER || "root",
    password: env.PASSWORD || "",
    database: env.DATABASE || "social-network-node",
  },

  mysqlService: {
    port: env.MYSQL_SERVICE || 3000,
  },
};
