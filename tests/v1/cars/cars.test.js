const request = require("supertest");
const app = require("../../../app");

describe("GET /v1/cars", () => {
  it("should response with 200 as status code", async () => {
    const page = 1;
    const pagesize = 6;

    return request(app)
      .get("/v1/cars")
      .set("Content-Type", "application/json")
      .send({ page, pagesize })
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(
          expect.objectContaining({
            ...res.body,
          })
        );
      });
  });

  // it("should response with 401 as status code", async () => {
  //   const page = "";
  //   const pagesize = "";

  //   return request(app)
  //     .get("/v1/cars")
  //     .set("Content-Type", "application/json")
  //     .send({ page, pagesize })
  //     .then((res) => {
  //       expect(res.statusCode).toBe(401);
  //       expect(res.body).toEqual(
  //         expect.objectContaining({
  //           error: {
  //             name: expect.any(String),
  //             message: expect.any(String),
  //             details: null,
  //           },
  //         })
  //       );
  //     });
  // });
});
