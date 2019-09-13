const connection = require("../database/db_connection");

module.exports = productId => {
  return connection.query("SELECT * FROM products WHERE id = $1", [productId]);
};
