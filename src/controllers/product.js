const { getProductById, getRatingsByProduct } = require("../model/queries");

exports.get = (req, res, next) => {
  const { id } = req.params;
  getProductById(id)
    .then(product => {
      const chosenProduct = product[0];
      getRatingsByProduct(id).then(ratings => {
        res.render("productPage", { chosenProduct, ratings });
      });
    })
    .catch(err => next(err));
};
