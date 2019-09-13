const { getProductById } = require("../model/queries");

exports.get = (req, res, next) => {
  const { id } = req.params;
  getProductById(id)
    .then(chosenProduct => res.render("productPage", { chosenProduct }))
    .catch(err => next(err));
};
