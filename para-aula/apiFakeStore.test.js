const request = require("supertest");
const apiUrl = "https://fakestoreapi.com/";

describe("GET /products/{id}", () => {
  it("should return 200 when find product Mens Cotton Jacket", () => {
    request(apiUrl)
      .get("products/3")
      .expect(200)
      .then((response) => {
        expect(response.body.title).toEqual("Mens Cotton Jacket");
      });
  });
});

describe("GET /users", () => {
  it("should return 200 when find a user", () => {
    request(apiUrl)
      .get("users")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({ username: "johnd" }),
          ])
        );
      });
  });
});

/*describe("GET /products/{id}", () => {
  it("should return 404 when not find product", () => {
    request(apiUrl)
      .get("products/30")
      //.expect(404)
      .then((response) => {
        expect(response.statusCode).toEqual(404);
      });
  });
});*/

describe("Get /users", () => {
  it("should return 200 when find a name", () => {
    request(apiUrl)
      .get("users")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              name: { firstname: "john", lastname: "doe" },
            }),
          ])
        );
      });
  });
});


