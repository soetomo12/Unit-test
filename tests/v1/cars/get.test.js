const request = require("supertest");
const app = require("../../../app");

describe("GET /v1/cars/:id", () => {
  it("should response with 200 as status code", async () => {
    return request(app)
      .get("/v1/cars/" + 1)
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(
          expect.objectContaining({
            id: 1,
            name: "Mazda RX4",
            price: 300000,
            size: "SMALL",
            image: "https://source.unsplash.com/500x500",
            isCurrentlyRented: false,
            createdAt: "2022-06-08T06:13:50.905Z",
            updatedAt: "2022-06-08T06:13:50.905Z",
          })
        );
      });
  });
});
