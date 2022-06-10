const request = require("supertest");
const app = require("../../../app");

describe("POST /v1/auth/login", () => {
  it("should response with 201 as status code", async () => {
    const email = "fajar@gmail.com";
    const password = "123";

    return request(app)
      .post("/v1/auth/login")
      .set("Content-Type", "application/json")
      .send({ email, password })
      .then((res) => {
        expect(res.statusCode).toBe(201);
        expect(res.body).toEqual(
          expect.objectContaining({
            ...res.body,
          })
        );
      });
  });

  it("should response with 404 as status code", async () => {
    const email = "fa@gmail.com";
    const password = "1";

    return request(app)
      .post("/v1/auth/login")
      .set("Content-Type", "application/json")
      .send({ email, password })
      .then((res) => {
        expect(res.statusCode).toBe(404);
        expect(res.body).toEqual(
          expect.objectContaining({
            error: {
              name: "Error",
              message: "fa@gmail.com is not registered!",
              details: {
                email: "fa@gmail.com",
              },
            },
          })
        );
      });
  });
  it("should response with 401 as status code", async () => {
    const email = "fajar@gmail.com";
    const password = "1";

    return request(app)
      .post("/v1/auth/login")
      .set("Content-Type", "application/json")
      .send({ email, password })
      .then((res) => {
        expect(res.statusCode).toBe(401);
        expect(res.body).toEqual(
          expect.objectContaining({
            error: {
              name: "Error",
              message: "Password is not correct!",
              details: {},
            },
          })
        );
      });
  });
});
