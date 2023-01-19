const { createClient } = require("redis");
const { redisPort, redisHost } = require("../config");

let client;

(async () => {
  client = createClient({
    host: redisHost,
    port: redisPort,
  });
  client.on("connect", () => console.log("Connected with Redis!"));
  client.on("error", (err) => console.log("Redis Client Error:  ", err));

  await client.connect();
})();

const setDataInRedis = async (key, value) => {
  //   console.log(`${key}: ${value}`);
  await client.set(key, JSON.stringify(value));
};

const getDataFromRedis = async (key) => JSON.parse(await client.get(key));

module.exports = {
  getDataFromRedis,
  setDataInRedis,
  client,
};
