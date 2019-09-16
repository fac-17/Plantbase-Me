const getCravings = require("./getCravings");
const getAllProducts = require("./getAllProducts");
const getProductById = require("./getProductById");
const getRatingsByProduct = require("./getRatingsByProduct");
const getProductsByCraving = require("./getProductsByCraving");
const postProduct = require("./postProduct");
const getTopCommentByProduct = require("./getTopCommentByProduct");
const getProductAndRating = require("./getProductAndRating");
const postRatingComment = require("./postRatingComment");
const postCommentUpvote = require("./postCommentUpvote");

module.exports = {
  getCravings,
  getAllProducts,
  getProductById,
  getRatingsByProduct,
  getProductsByCraving,
  postProduct,
  getTopCommentByProduct,
  getProductAndRating,
  postRatingComment,
  postCommentUpvote
};
