const postCommentUpvote = require("../model/queries/postCommentUpvote");

exports.post = (req, res, next) => {
  console.log("getting into postcommentupvote.js");
  //   let { commentId } = req.params;

  postCommentUpvote(14, 10);
  //   res.redirect("/product/" + productID);
};
