const connection = require("../database/db_connection");

const getCravings = () => connection.query("SELECT * FROM cravings");

module.exports = {
  getCravings
};
