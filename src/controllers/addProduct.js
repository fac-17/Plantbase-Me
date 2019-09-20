const { postProduct, postRatingComment } = require("../model/queries");

exports.post = (req, res) => {
  const product = req.body;

  // extract relevant properites for the rating
  const { rating, comment } = product;

  // remove extra properties from product to post to products table
  delete product.rating;
  delete product.comment;

  // assign rating and comment to an object for passing to submitRating.js

  // Post the product & rating
  postProduct(product).then(id => {
    const rating_comment = {
      rating: rating,
      comment: comment
    };
    postRatingComment(rating_comment, id[0].id);
    res.redirect("/thanksforsubmission");
  });
};
