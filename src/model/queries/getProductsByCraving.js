const connection = require("../database/db_connection");

module.exports = cravingId => {
  return connection.query("SELECT * FROM products WHERE craving_id = $1", [
    cravingId
  ]);
};
