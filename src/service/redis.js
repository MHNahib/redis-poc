const { createClient } = require("redis");
const { redisPort } = require("../config");

const client = createClient();

(async () => {
  await client.connect();
  client.on("connect", () => console.log("Connected!"));
  client.on("error", (err) => console.log("Redis Client Error", err));
})();

const setDataInRedis = (key, value) => {
  //   console.log(`${key}: ${value}`);
  client.set(key, JSON.stringify(value));
};

const getDataFromRedis = async (key) => JSON.parse(await client.get(key));

module.exports = {
  getDataFromRedis,
  setDataInRedis,
  client,
};
