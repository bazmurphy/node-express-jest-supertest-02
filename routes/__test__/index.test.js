const app = require("../../app");
const request = require("supertest");

describe("register", () => {

  it("returns status code 201 if firstName and lastName are passed", async () => {
    const res = await request(app).post("/register").send({ firstName: "Baz", lastName: "Murphy" });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual({ success: true, message: "Successfully created", data: { firstName: "Baz", lastName: "Murphy" } })
  });

  it("returns status code 400 if firstName is missing", async () => {
    const res = await request(app).post("/register").send({ lastName: "Murphy" });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual({ success: false, message: "You need to provide a firstName", data: null })
  });

  it("returns status code 400 if lastName is missing", async () => {
    const res = await request(app).post("/register").send({ firstName: "Baz" });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual({ success: false, message: "You need to provide a lastName", data: null })
  });

  it("returns status code 400 if firstName and lastName are missing", async () => {
    const res = await request(app).post("/register").send({});
    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual({ success: false, message: "You need to provide a firstName and a lastName", data: null })
  });

})