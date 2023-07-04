const request = require("supertest");
const apiUrl = "https://fakestoreapi.com/";

describe("GET /products/{id}", () => {
    it("should return 200 when find Mens Cotton Jacket", () => {
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
              expect.objectContaining({username : "john"})])
          );
        });
    });
  });

  // describe("GET /products/{id}", () => {
  //   it("should return 404 when not find product", () => {
  //     request(apiUrl)
  //       .get("products/25")
  //       .expect(404)
  //       .then((response) => {
  //         expect(response.body.title).toThrow("DEU ÁGUIA GALERA, PRODUTO NAO ENCONTRADO");
  //       });
  //   });
  // });

  describe("GET /users", () => {
    it("should return 200 when find a name", () => {
      request(apiUrl)
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