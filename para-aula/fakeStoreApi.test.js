const request = require('supertest');
const apiUrl = 'https://fakestoreapi/';

describe("GET /products/{$id}", () => {
    test("should return 404 when find product 1", () => {
        request(apiUrl).get('products/21').expect(404).then(response => {
            expect(response.body.title).not.toEqual("Foldsack No. 1 Backpack, Fits 15 Laptops")
        })
    })
})