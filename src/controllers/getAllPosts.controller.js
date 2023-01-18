const { StatusCodes } = require("http-status-codes/build/cjs/status-codes");
const { getApi } = require("../service/apiServices");
const response = require("../utils/response");

const getAllPostsController = async (req, res) => {
  try {
    const posts = await getApi(
      res,
      `https://jsonplaceholder.typicode.com/todos/`
    );
    response(res, StatusCodes.ACCEPTED, true, posts, "Success");
  } catch (err) {
    response(res, StatusCodes.BAD_REQUEST, false, null, err.message);
  }
};

module.exports = {
  getAllPostsController,
};
