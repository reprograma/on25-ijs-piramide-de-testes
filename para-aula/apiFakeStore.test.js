//Teste de Integração

const request = require('supertest');
const ApiUrl = 'https://fakestoreapi.com/';

// describe("GET /products", () => {
//     it("Retornar o nome do produto 19", () => {
//         request(ApiUrl)
//         .get("/products/19") // Totoro movie id
//         .expect(200).then((res) => {
//             expect(res.body.title).toBe("Opna Women's Short Sleeve Moisture");
//         });
//     });
// });

// describe("GET /product", () => {
//     it("Retornar o titulo e o preço do id 19", () => {
//         request(ApiUrl)
//         .get("products/19")
//         .expect(200).then((res) => {
//             expect(res.body).toEqual(expect.arrayContaining([expect.objectContaining({title: "Opna Women's Short Sleeve Moisture", price: 7.95})]));
//         });
//     });
// });

describe("GET /users", () => {
    it("Retornar o username do John em users", () => {
        request(ApiUrl)
        .get("users")
        .expect(200).then((res) => { 
            const usernames = ApiUrl.map((user) => user.username);
            expect(usernames).toContain("johnd");
            expect(res.body.username).toEqual("johnd");
        });
    });
});


describe("GET /products/{id}", () => {
    it("should return 404 when not find product", () => {
        request(ApiUrl)
        .get("products/25")    
        .then((response) => {
          expect(response.statusCode).toEqual(404);
        });
    });
});