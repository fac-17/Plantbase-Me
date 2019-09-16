const postRatingComment = require("../model/queries/postRatingComment");

exports.post = (req, res, next) => {
  postRatingComment(req.body);
};
