const postRatingComment = require("../model/queries/postRatingComment");

exports.post = (req, res, next) => {
  let productID = req.params.prodid;
  postRatingComment(req.body, productID);
  res.redirect("/product/" + productID);
};
