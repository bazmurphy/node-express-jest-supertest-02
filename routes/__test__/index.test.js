const app = require("../../app");
const request = require("supertest");

describe("register", () => {
  it("returns status code 201 if firstName is passed", async () => {
    const res = await request(app).post("/register").send({ firstName: "Baz" });
    expect(res.statusCode).toEqual(201);
  })
})