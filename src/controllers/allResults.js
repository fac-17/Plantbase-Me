const { getAllProducts } = require("../model/queries");

exports.get = (req, res, next) => {
  getAllProducts()
    .then(allProducts => res.render("results", { allProducts }))
    .catch(err => next(err));
};
