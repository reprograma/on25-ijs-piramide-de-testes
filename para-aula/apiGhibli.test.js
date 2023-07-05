//Teste de Integração

const request = require('supertest');
const ApiUrl = 'https://ghibliapi.vercel.app';

describe("GET /films/{id}", () => {
    it("Should return 200 when finding Totoro movie", () => {
        request(ApiUrl)
        .get("/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49") // Totoro movie id
        .expect(200).then((res) => {
            expect(res.body.title).toBe("My Neighbor Totoro");
        });
    });
});

describe("GET /people", () => {
    it("Should return 200 when find a people", () => {
        request(ApiUrl)
        .get("/people")
        .expect(200).then((res) => {
            expect(res.body).toEqual(expect.arrayContaining([expect.objectContaining({name: "Ashitaka"})]));
        });
    });
});