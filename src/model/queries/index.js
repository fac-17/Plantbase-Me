const connection = require("../database/db_connection");

const getCravingNames = () => connection.query("SELECT * FROM cravings");

module.exports = {
  getCravingNames
};
