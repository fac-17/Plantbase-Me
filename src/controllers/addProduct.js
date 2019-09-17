const { postProduct } = require("../model/queries");

exports.post = (req, res) => {
  const product = req.body;
  postProduct(product);
  res.redirect("/thanksforsubmission");
};
