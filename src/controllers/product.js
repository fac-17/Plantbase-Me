const { getProductById, getRatingsByProduct } = require("../model/queries");

exports.get = (req, res, next) => {
  const { id } = req.params;
  getProductById(id)
    .then(product => {
      const chosenProduct = product[0];
      getRatingsByProduct(id).then(ratings => {
        res.render("productPage", {
          chosenProduct,
          ratings,
          title: "Product",
          cssPath: "/css/productPage.css",
          jsPath: "/js/productPage.js"
        });
      });
    })
    .catch(err => next(err));
};
