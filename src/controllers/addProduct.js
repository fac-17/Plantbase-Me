const { postProduct } = require("../model/queries");

exports.post = (req, res) => {
  const { product } = req.params;
  postProduct(product, (err, res) => {
    if (err) console.log(err);
    else {
      //redirect to thanks for submissions page
      res.redirect(`/src/${submission}`);
    }
  });
};
