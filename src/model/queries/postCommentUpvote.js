const connection = require("../database/db_connection");

module.exports = (id, upvotesNumber) => {
  return connection.query("UPDATE ratings SET votes = $2 WHERE id=$1", [
    id,
    upvotesNumber
  ]);
};
