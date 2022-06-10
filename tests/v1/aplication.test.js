const request = require("supertest");
const app = require("../../app");

describe("GET /", () => {
  it("should response with 200 as status code", async () => {
    return request(app)
      .get("/")
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(
          expect.objectContaining({
            status: "OK",
            message: "BCR API is up and running!",
          })
        );
      });
  });
  it("should response with 404 as status code", async () => {
    return request(app)
      .get("/h")
      .then((res) => {
        expect(res.statusCode).toBe(404);
        expect(res.body).toEqual(
          expect.objectContaining({
            error: {
              name: "Error",
              message: "Not found!",
              details: {
                method: "GET",
                url: "/h",
              },
            },
          })
        );
      });
  });
});
