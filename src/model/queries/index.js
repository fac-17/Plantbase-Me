const connection = require("../database/db_connection");

const getCravings = () => connection.query("SELECT * FROM cravings");

const getProductsbyCraving = cravingId => {
  return connection.query("SELECT * FROM products WHERE craving_id = $1", [
    cravingId
  ]);
};

module.exports = {
  getCravings,
  getProductsbyCraving
};
