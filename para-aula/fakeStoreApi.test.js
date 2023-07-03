const request = require('supertest')
const apiUrl = 'https://fakestoreapi.com'


describe("GET /products", () =>{

    it('should return status 200', () => {
        request(apiUrl)
        .get('/products')
        .expect(200)        
    })
})

describe("GET /products/category", () =>{
    it('should return status 200 when find category jewelery ', () => {
        request(apiUrl)
        .get('/products/category/jewelery')
        .expect(200)
        .then((response) => {
            //expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({'category':'jewelery'})]))
            expect(response.body[0].id).toEqual(5)
            expect(response.body[0].price).toEqual(695)
        })        
    })
})

describe("GET /products?limit={number}", () =>{
    it('should return status and a list with 13 products ', () => {
        request(apiUrl)
        .get('/products?limit=13')
        .expect(200)
        .then((response) => {
            expect(response.body.length).toEqual(13)
        })        
    })
})

describe("POST /products", () =>{
    it('should make a request POST and return status 201 ', () => {
        const infos = {   
        id: 21,     
        title: "Computador ",
        price: 999.99,
        description: "notebook description",
        category: "Informatica",
        image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        rating: {
          rate: 1.5,
          count: 200}
        }
        request(apiUrl)
        .post('/products')
        .send(infos)
        .expect(200, infos)    
        .then(response => { console.log(response.body)})  
    })
})


