const { getCravings } = require("../model/queries");

exports.get = (req, res, next) => {
  getCravings()
    .then(cravings =>
      res.render("home", {
        cravings,
        title: "home",
        cssPath: "/css/home.css",
        jsPath: "/js/home.js"
      })
    )
    .catch(err => next(err));
};
