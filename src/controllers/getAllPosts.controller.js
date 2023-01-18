const { StatusCodes } = require("http-status-codes/build/cjs/status-codes");
const { apiUrl } = require("../config");
const { getApi } = require("../service/apiServices");
const { setDataInRedis, getDataFromRedis } = require("../service/redis");
const response = require("../utils/response");

const getAllPostsController = async (req, res) => {
  try {
    const data = await getDataFromRedis("todos");
    if (data !== null)
      return response(res, StatusCodes.ACCEPTED, true, data, "Success");

    const todos = await getApi(res, `${apiUrl}/todos/`);
    setDataInRedis("todos", todos);
    return response(res, StatusCodes.ACCEPTED, true, todos, "Success");
  } catch (err) {
    return response(res, StatusCodes.BAD_REQUEST, false, null, err.message);
  }
};

module.exports = {
  getAllPostsController,
};
