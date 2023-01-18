const axios = require("axios");
const response = require("../utils/response");

const getApi = async (res, action) => {
  try {
    const result = await axios.get(action);
    return result.data;
  } catch (err) {
    response(res, StatusCodes.BAD_REQUEST, false, null, err.message);
  }
};

module.exports = { getApi };
