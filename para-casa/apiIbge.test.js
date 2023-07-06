const request = require('supertest');
const apiUrl = "https://servicodados.ibge.gov.br/api/v1/localidades";

describe("GET /distritos/{id}", () => {
    it("Should return 200 when find Fazendinha", () => {
        request(apiUrl)
        .get("/distritos/160030312")
        .expect(200)
        .then(response => {
            expect(response.body[1].nome).toEqual("Fazendinha")
        })
    })

    it("Should return error 404 when when id is invalid", () => {
        request(apiUrl)
        .get("/distritos/9999999")
        .expect(404)
        .then(response => {
            expect(response.status).toEqual(404)
        })
    })
});

describe("GET /estados/{RO}", () => {
    it("Should return 200 when it finds RO state array", () => {
        request(apiUrl)
        .get("estados/RO")
        .expect(200)
        .then(response => {
            expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining(
                {"id":11,
                "sigla":"RO",
                "nome":"Rondônia",
                "regiao":{"id":1,
                "sigla":"N",
                "nome":"Norte"}}
            )]))
        })
    })
});

describe("GET /distritos", () => {
    it("Should return 200 when it finds the Fazendinha district", async () => {
        const response = await request('https://servicodados.ibge.gov.br/api/v1/localidades').get('/distritos/160030312')

        console.log(response.status)
        expect(response.status).toBe(200)
    })
});
