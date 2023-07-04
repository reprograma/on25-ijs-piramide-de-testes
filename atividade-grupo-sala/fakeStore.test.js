const request = require("supertest");
const apiUrl = "https://fakestoreapi.com/";

describe("GET /products/1", () => {
  it("should return the first product of the store", () => {
    request(apiUrl)
      .get("products/1")
      .expect(200)
      .then((response) => {
        expect(response.body.price).toEqual(109.95);
      });
  });

  it("should return an error of product", async () => {
    const response = await request(apiUrl).get("products/l4h58d9t5h89yu%&");
    expect(response.status).toEqual(404);
  });
});
