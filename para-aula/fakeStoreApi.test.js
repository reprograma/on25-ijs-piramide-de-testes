const request = require('supertest');
const apiUrl = "https://fakestoreapi.com/"

describe("GET /products", () =>{
    it("Should return 200, when returns all the products", () =>{
        request(apiUrl)
        .get("/products")
        .expect(200)
    })
})

describe("GET /products/category/jewerely", () => {
    it("Should return 200, when returns jewerly category", () => {
        request(apiUrl)
        .get("products/category/jewerely")
        .expect(200)
        .then(response => {
            expect(response.body[0].id).toEqual(5)
            expect(response.body[0].price).toEqual(695)
        })
    })
})

describe("GET /products?limit={number}", () => {
    it("Should return status 200 and a list of 13 products", () => {
        const number = 13;
        request(apiUrl)
        .get(`products?limit=${number}`)
        .then(response => {
            expect(response.body.length).toEqual(number)
        })
    })
})

describe("POST /products", () =>{
    it("Should POST an obj id and return 201", () =>{
        request(apiUrl)
        .post("products")
        .send({
            "id": 1,
            "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            "price": 109.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            "rating": {
              "rate": 3.9,
              "count": 120
            }})
            .expect(201, {
                "id": 1,
                "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                "price": 109.95,
                "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                "category": "men's clothing",
                "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                "rating": {
                  "rate": 3.9,
                  "count": 120
                }
              })
    })
})

describe("POST /products", () =>{
    it("Should POST an obj and return 201", () =>{
        request(apiUrl)
        .post("products")
        .send({
            "id": 999,
            "title": "A profa entrou na sala",
            "price": 1200.00,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            "rating": {
              "rate": 3.9,
              "count": 120
            }})
            .expect(201, {
                "id": 999,
                "title": "A profa entrou na sala",
                "price": 1200.00,
                "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                "category": "men's clothing",
                "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                "rating": {
                  "rate": 3.9,
                  "count": 120
                }
              })
              .then(response => {
                console.log(response.body)
              })
    })
})

