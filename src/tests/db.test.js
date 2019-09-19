const tape = require("tape");
const _test = require("tape-promise").default;

const test = _test(tape);
const { build, connection } = require("../model/database/db_build");
const queries = require("../model/queries");

test("Tape test for db files is working", t => {
  t.equal(1, 1, "1 equals 1");
  t.end();
});

// ideally would be good to be able to check whether a database actually has built itself

test("Check test database builds correctly", t => {
  connection
    .query(build)
    .then(() => console.log("Database connected and built"))
    .then(() => {
      t.pass("Test DB built correctly");
      t.end();
    })
    .catch(e => console.error("error", e));
});
