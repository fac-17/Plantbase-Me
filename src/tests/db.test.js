const tape = require("tape");
const _test = require("tape-promise").default;

const test = _test(tape);
const { build, connection } = require("../model/database/db_build");
const queries = require("../model/queries");

test("Tape test for db files is working", t => {
  t.equal(1, 1, "1 equals 1");
  t.end();
});

test("Check test database builds correctly", t => {
  t.equal(process.env.NODE_ENV, "test", "Node environment is test");
  connection
    .query(build)
    .then(() => console.log("Database connected and built"))
    .then(() => {
      t.pass("Test DB built correctly");
      t.end();
    })
    .catch(e => console.error("error", e));
});

test("Check results are correct from getCravings query", t => {
  const expected = [
    { id: 1, craving_name: "Cheese" },
    { id: 2, craving_name: "Meat" },
    { id: 3, craving_name: "Milk" },
    { id: 4, craving_name: "Sweets" }
  ];

  queries.getCravings().then(allCravings => {
    t.deepEqual(allCravings, expected, "Correct cravings are returned");
    t.end();
  });
});

test("Check results are correct from getProductsByID query", t => {
  const expected = "Violife Original Grated";

  queries.getProductById(1).then(product => {
    t.deepEqual(
      product[0].product_name,
      expected,
      "Correct product is returned"
    );
    t.end();
  });
});

test("Check results are correct from getProductsByCraving query", t => {
  const expected = [11, 12];

  queries.getProductsByCraving(2).then(product => {
    t.deepEqual(product[0].id, expected[0], "Correct product is returned");
    t.deepEqual(product[4].id, expected[1], "Correct product is returned");
    t.end();
  });
});
