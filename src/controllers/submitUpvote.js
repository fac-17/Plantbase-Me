const postCommentUpvote = require("../model/queries/postCommentUpvote");

exports.post = (req, res, next) => {
  let { commentId, upvotesNumber } = req.body;
  postCommentUpvote(commentId, upvotesNumber);
};
