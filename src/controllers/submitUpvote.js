const postCommentUpvote = require("../model/queries/postCommentUpvote");

exports.post = (req, res, next) => {
  console.log("getting into postcommentupvote.js");
  let { commentId } = req.params;

  postCommentUpvote(commentId, 10);
  //   res.redirect("/product/" + productID);
};
