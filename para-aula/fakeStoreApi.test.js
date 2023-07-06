const request = require('supertest');
const apiUrl = "https://fakestoreapi.com"

describe("GET /products", () => {
  it("should return 200 when find all products", () => {
    request(apiUrl)
    .get("/products")
    .expect(200)
  })
})

describe("GET /products/category/jewelery", () => {
  it("should return 200 when find jewelery category", () => {
    request(apiUrl)
    .get("/products/category/jewelery")
    .expect(200)
    .then(response => {
      expect(response.body[0].id).toEqual(5)
      expect(response.body[0].price).toEqual(695)
    })
  })
})

describe("GET /products?limit={number}", () => {
  it("should return status 200 and one array with 13 items", () => {
    const number = 4;

    request(apiUrl)
    .get(`/products?limit=${number}`)
    .expect(200)
    .then(response => {
      expect(response.body.length).toEqual(number)
    })
  })
})

describe("POST /products", () => {
  it("shold return 201 when add new product", () => {
    const obj = {
      title: 'test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic'
    }
    
    request(apiUrl)
    .post("/products")
    .send(obj)
    .expect(201, obj)
  })
})