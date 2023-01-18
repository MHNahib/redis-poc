require("dotenv").config();
module.exports = {
  redisPort: process.env.REDIS,
  apiUrl: process.env.API,
};
