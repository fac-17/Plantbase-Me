const { getAllProducts } = require("../model/queries");

exports.get = (req, res) => {
  getAllProducts()
    .then(allProducts => res.render("results", { allProducts }))
    .catch(err => next(err));
};
