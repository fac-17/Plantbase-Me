const { postProduct } = require("../model/queries");

exports.post = (req, res) => {
  const product = req.body;
  const { product_name, rating, comment } = product;
  delete product.rating;
  delete product.comment;
  postProduct(product);
  res.redirect("/thanksforsubmission");
};
