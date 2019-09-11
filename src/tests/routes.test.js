const request = require("supertest");
const test = require("tape");
const app = require("../app");

test("Home route should return HTML content", t => {
  request(app)
    .get("/")
    .expect("content-type", /html/)
    .end((err, res) => {
      t.equal(
        res.headers["content-type"],
        "text/html; charset=utf-8",
        "Content type is html"
      );
      t.error(err, "There is no error");
      t.end();
    });
});

test("Home route should return with statuscode 200", t => {
  request(app)
    .get("/")
    .expect(200)
    .end((err, res) => {
      t.equal(res.status, 200, "Status code is 200");
      t.error(err, "There is no error");
      t.end();
    });
});
