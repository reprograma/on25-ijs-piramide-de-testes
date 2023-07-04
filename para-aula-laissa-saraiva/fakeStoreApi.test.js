const request = require('supertest');
const apiUrl = 'https://fakestoreapi.com/';

describe("GET / products" , ()=> 

it("Should return" , () => { 
request(apiUrl)
.get("products/1")
.expect(200)
.then(response => {
  expect(response.body.title).toEqual("0")
})
})
)


describe("GET / users", ()=> {
  it('Should return 200 when find an user email', ()=> {
    request(apiUrl)
    .get('users/1')
    .expect(200)
    .then(response => {
      expect(response.body.email).toMatch('john@gmail.com')
    })
  })
});

// Grupo da Thayssa

describe('GET/carts/{id}', () => {

  it("", () => {
    request(apiUrl)
    .get('products/1')
    .expect(200)
    .then(response => {
      expect(response.body.price).toEqual(109.95)
    })
  })

  it("should return 404 when product is not found", () => {
    request(apiUrl)
    .get('users')
    .expect(200)
    .then(response => {
      expect(response.body.map(obj => obj.username)).toContain("johnd")
    })
  })
});

