require("dotenv").config();
module.exports = {
  redisHost: process.env.REDIS_HOST,
  redisPort: process.env.REDIS_PORT,
  apiUrl: process.env.API,
};
