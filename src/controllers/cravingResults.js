const { getProductsByCraving } = require("../model/queries");

exports.get = (req, res, next) => {
  const { craving } = req.params;
  getProductsByCraving(craving)
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
