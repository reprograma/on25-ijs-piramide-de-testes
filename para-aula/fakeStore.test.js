const request = require('supertest')
const api = 'https://fakestoreapi.com/'

describe('GET /products/{id}', () => {
    it('should return 200 when product is found', () => {
        request(api)
        .get('products/1')
        .expect(200)
        .then(response => {
            expect(response.body.price).toEqual(109.95)
        })
    })

    it('should return 200 when price of the product is found', () => {
        request(api)
        .get('products/1')
        .expect(200)
        .then(response => {
            expect(response.body.price).toEqual(110)
        })
    })
})

describe('GET/ users', () => {
    it('should return 200 when user is found', () =>{
        request(api)
        .get('users')
        .expect(200)
        .then( response => {
            expect(response.body.map(obj => obj.username)).toContain(["johnd"])
        })
    })

    it('should return 200 when email is found', () =>{
        request(api)
        .get('users')
        .expect(200)
        .then( response => {
            expect(response.body.map(obj => obj.email)).toContain(["don@gmail.com"])
        })
    })
})

