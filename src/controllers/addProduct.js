const { postProduct } = require("../model/queries");

exports.post = (req, res) => {
  console.log(req.body);
  postProduct(product, (err, res) => {
    if (err) console.log(err);
    else {
      //redirect to thanks for submissions page
      res.redirect(`/thanksforsubmission`);
    }
  });
};
