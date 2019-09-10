const test = require("jest");
const dbBuild = require("../model/database/db_build");

test('adds 1 + 2 to equal 3', () => {
    expect(dbBuild(1, 2)).toBe(3);
});