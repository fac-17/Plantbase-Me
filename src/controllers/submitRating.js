const postRatingComment = require("../model/queries/postRatingComment");

exports.post = req => {
  postRatingComment(req.body);
};
