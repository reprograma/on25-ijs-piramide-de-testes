const request = require('supertest');
const apiUrl = "https://fakestoreapi.com/"

describe("GET /products/{$id}", () => {
  it("Should return 200 when find product 1", () => {
    request(apiUrl)
    .get('products/1')
    .expect(200)
    .then(response => {
      expect(response.body.title).toEqual("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")
    })
  })  
});

describe("GET /products/{$id}", () => {
  it("Should return 404 when find product 21", () => {
    request(apiUrl)
    .get('products/21')
    .expect(404)
    .then(response => {
      expect(response.body.title).toEqual(21)
    })
  })  
});

describe("GET /users", () => {
  it("Should return 200 when find a user email", () => {
    request(apiUrl)
    .get("users/1")
    .expect(200)
    .then(response => {
      expect(response.body.email).toMatch("john@gmail.com")
    })
  })
});

describe("GET /users", () => {
  it("Should return 200 when find a user email", () => {
    request(apiUrl)
    .get("users/1")
    .expect(200)
    .then(response => {
      expect(response.body.email).toContain("john@gmail.com")
    })
  })
});