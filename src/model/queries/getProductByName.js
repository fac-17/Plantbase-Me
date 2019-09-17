const connection = require("../database/db_connection");

module.exports = product_name => {
  return connection.query("SELECT id FROM products WHERE product_name = $1", [
    product_name
  ]);
};
