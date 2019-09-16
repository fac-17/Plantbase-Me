const connection = require("../database/db_connection");

module.exports = (id, upvotesNumber) => {
  return connection.query(
    "INSERT INTO ratings (votes) VALUES ($2) WHERE id=$1",
    [id, upvotesNumber]
  );
};
