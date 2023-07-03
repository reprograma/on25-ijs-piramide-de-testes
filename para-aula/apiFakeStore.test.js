const request = require('supertest');
const apiUrl = "https://fakestoreapi.com"

describe("GET/products/categories", () => {
    it("should pass when finding 'eletronics'", () => {
        request(apiUrl)
        .get('/products/categories')
        .expect(200)
        .then(response => {
            expect(response.body).toEqual(expect.arrayContaining(["electronics"]))
        })
    })

    it("should pass when finding 'electronics' and 'jewelery'", () => {
        request(apiUrl)
        .get('/products/categories')
        .expect(200)
        .then(response => {
            expect(response.body).toEqual(expect.arrayContaining(["electronics",  "jewelery"]))
        })
    })

    it("should pass when finding the specified title", () => {
        request(apiUrl)
        .get('/products')
        .expect(200)
        .then(response => {
            expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"})]))
        })
    })

});

