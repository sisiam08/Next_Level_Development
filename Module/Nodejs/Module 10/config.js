require("dotenv").config();

const config = {
  app: {
    name: process.env.APP_NAME,
    version: process.env.APP_VERSION,
    port: process.env.PORT,
    node_environment: process.env.NODE_ENV,
  },
};

module.exports = config;
