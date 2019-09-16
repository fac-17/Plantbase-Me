const getCravings = require("./getCravings");
const getAllProducts = require("./getAllProducts");
const getProductById = require("./getProductById");
const getRatingsByProduct = require("./getRatingsByProduct");
const getProductsbyCraving = require("./getProductsByCraving");
const postProduct = require("./postProduct");
const getTopCommentByProduct = require("./getTopCommentByProduct");
const getProductAndRating = require("./getProductAndRating");
const postRatingComment = require("./postRatingComment");

module.exports = {
  getCravings,
  getAllProducts,
  getProductById,
  getRatingsByProduct,
  getProductsbyCraving,
  postProduct,
  getTopCommentByProduct,
  getProductAndRating,
  postRatingComment
};
