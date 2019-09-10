require("env2")("./.env");
const pgp = require("pg-promise")();
const url = require("url");

const { PLANTBASE_DB_URL } = process.env;

if (process.env.NODE_ENV === "test") {
  PLANTBASE_DB_URL = process.env.TEST_DB_URL;
}

if (!PLANTBASE_DB_URL) {
  throw new Error("Environment variable PLANTBASE_DB_URL must be set");
}
const params = url.parse(PLANTBASE_DB_URL);

const [username, password] = params.auth.split(":");

const options = {
  host: params.hostname,
  port: params.port,
  database: params.pathname.split("/")[1],
  max: process.env.DB_MAX_CONNECTION || 2,
  user: username,
  password,
  ssl: params.hostname !== "localhost"
};

module.exports = pgp(options);
