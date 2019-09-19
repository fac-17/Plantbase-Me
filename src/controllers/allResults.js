const { getAllProducts } = require("../model/queries");

exports.get = (req, res, next) => {
  getAllProducts()
    .then(allProducts =>
      res.render("results", {
        allProducts,
        title: "Results",
        cssPath: "/css/resultsPage.css",
        jsPath: "/js/resultsPage.js"
      })
    )
    .catch(err => next(err));
};
