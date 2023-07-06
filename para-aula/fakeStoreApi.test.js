const request = require("supertest");
const ApiUrl = "https://fakestoreapi.com/";

describe("GET /products", () => {
  it("should return 200 when finds a product id", () => {
    request(ApiUrl)
      .get("products/3")
      .expect(200)
      .then((res) => {
        expect(res.body.title).toEqual("Mens Cotton Jacket");
      });
  });
});

describe("Get /users", () => {
  it("should return 200 when find a name", () => {
    request(ApiUrl)
      .get("users")
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              name: { firstname: "john", lastname: "doe" },
            }),
          ])
        );
      });
  });
});

describe("GET /products/{id}", () => {
  it("should return 404 when not find product", () => {
    request(ApiUrl)
      .get("products/25")
      .expect(404)
      .then((response) => {
        expect(response.body.title).toEqual("undefined");
      });
  });
});
