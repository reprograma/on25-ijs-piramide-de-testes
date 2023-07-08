const request = require('supertest');
const apiUrl = 'https://fakestoreapi.com/';

describe("Get/carts/{id}", () => {
    it("should return 200 when product is found", () => {
        request(apiUrl)
        .get('products/1')
        .expect(200)
        .then(response => {
            expect(response.body.price).toEqual(109.95)
        })
    });

    it("should return 404 when product is not found", () => {
        request(apiUrl)
        .get('products/1')
        .expect(404)
        .then(response => {
            expect(response.body.price).toEqual(110)
        })
    });
});

describe("GET/users", () => {
    it('Should return 200 when user is found', () => {
        request(apiUrl)
        .get('users')
        .expect(200)
        .then(response => {
            expect(response.body.map(obj => obj.username)).toContain("johnd")
        })
    });

    it('Should return 200 when email is found', () => {
        request(apiUrl)
        .get('users')
        .expect(200)
        .then(response => {
            expect(response.body.map(obj => obj.email)).toContain("don@gmail.com")
        })
    });
});