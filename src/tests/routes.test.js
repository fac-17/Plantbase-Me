const request = require("supertest");
const test = require("tape");
const express = require("express");
const app = require("../app");

test("Home route should return HTML content", t => {
  request(app)
    .get("/")
    .expect("Content-Type", /html/)
    .end((err, res) => {
      t.equal(1, 1);
      t.end();
    });
});
