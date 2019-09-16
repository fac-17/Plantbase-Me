const { postProduct } = require("../model/queries");

exports.post = (req, res) => {
  const { product } = req.body;
  postProduct(product, (err, res) => {
    if (err) console.log(err);
    else {
      //redirect to thanks for submissions page
      res.redirect(`/src/views/thanksForSubmission.hbs`);
    }
  });
};
