const { getCravings } = require("../model/queries");

exports.get = (req, res, next) => {
  getCravings()
    .then(cravings => res.render("home", { cravings }))
    .catch(err => next(err));
};
