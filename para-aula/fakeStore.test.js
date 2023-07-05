const request = require ("supertest");
const apiUrl = "https://fakestoreapi.com/";


describe("GET /products/1",() =>{

    it("should return the first product", () => {
        request(apiUrl)
        .get("products/1")
        .expect(200)
        .then((response) => {
            expect(response.body.price).toEqual(109.95);
        });
    }),

    it("should return an error of product", async () => {
      const res = await request(apiUrl)
        .get('products/1');
    expect(res.body.price).toBe(109);
        });
    
});