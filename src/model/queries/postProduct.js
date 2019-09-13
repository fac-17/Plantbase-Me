const connection = require("../database/db_connection");

module.exports = product => {
  const {
    product_name,
    product_description,
    where_to_buy,
    product_image,
    craving_id,
    product_price
  } = product;
  return connection.query(
    "INSERT INTO products (product_name, product_description, where_to_buy, product_image, craving_id, product_price)VALUES($1, $2, $3, $4, $5, $6)",
    [
      product_name,
      product_description,
      where_to_buy,
      product_image,
      craving_id,
      product_price
    ]
  );
};
