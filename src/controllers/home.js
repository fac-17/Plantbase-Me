const { getCravings } = require("../model/queries");

exports.get = (req, res) => {
  getCravings()
    .then(cravings => res.render("home", { cravings }))
    .catch(err => next(err));
};
