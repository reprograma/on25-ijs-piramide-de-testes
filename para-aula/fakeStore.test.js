const request = require("supertest");
const apiUrl = "https://fakestoreapi.com/";

describe("Get product/1", () => {
  it("should return the first product", () => {
    request(apiUrl)
      .get("products/1")
      .expect(200)
      .then((response) => {
        expect(response.body.price).toEqual(109.95);
      });
  });

  it("should return the first product", () => {
    request(apiUrl)
      .get("products/1")
      .expect(404)
      .then((response) => {
        expect(response.body.price).toEqual(102.95);
      });
  });
});
