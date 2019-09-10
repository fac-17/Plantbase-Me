const { dbTest } = require("../app");

test("adds 1 + 2 to equal 3", () => {
  expect(dbTest(1, 2)).toBe(3);
});
