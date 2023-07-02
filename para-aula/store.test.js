const request = require('supertest')


const ApiUrl = 'https://fakestoreapi.com/'


describe("GET /id", () => {
    it("should return a 200 status if '_id'", async ()=> {
       
        const res = await request(ApiUrl).get('products/1');
        expect(res.status).toBe(200);
    }),

    it("should return a 404 status if '_id'", async ()=> {
       
        const res = await request(ApiUrl).get('products/1');
        expect(res.body.price).not.toBe(109);
    })
})


