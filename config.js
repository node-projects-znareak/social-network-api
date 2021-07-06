const env = process.env;

const config = {
  api: {
    port: env.API_PORT || 4000,
  },
  JWT_SECRET: env.JWT_SECRET || "RGGJLnuiHS6EWZxZUAujxI2Jqqrq8z3TNNcGSjJK",

  mysql: {
    port: env.PORT || 80,
    host: env.HOST || "localhost",
    user: env.USER || "root",
    password: env.PASSWORD || "",
    database: env.DATABASE || "social-network-node",
  },

  mysqlService: {
    host: env.MYSQL_SERVICE_HOST || "localhost",
    port: env.MYSQL_SERVICE_PORT || 3000,
  },

  postService: {
    host: env.POST_SERVICE_HOST || "localhost",
    port: env.POST_SERVICE_PORT || 3001,
  },
};

module.exports = config;
