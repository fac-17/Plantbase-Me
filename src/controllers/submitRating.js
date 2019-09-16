const postRatingComment = require("../model/queries/postRatingComment");

exports.post = (req, res, next) => {
  let productID = req.body.product_id;
  postRatingComment(req.body);
  res.redirect("/product/" + productID);
};
