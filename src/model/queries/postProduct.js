const connection = require("../database/db_connection");

module.exports = product => {
  let {
    product_name,
    product_description,
    craving_id,
    product_image,
    where_to_buy,
    product_price
  } = product;
  where_to_buy = '{"' + where_to_buy + '"}';
  return connection.query(
    "INSERT INTO products (product_name, product_description, craving_id, where_to_buy, product_image, product_price) VALUES($1, $2, $3, $4, $5, $6) RETURNING id",
    [
      product_name,
      product_description,
      craving_id,
      where_to_buy,
      product_image,
      product_price
    ]
  );
};
