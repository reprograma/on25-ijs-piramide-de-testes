const request = require('supertest')
const apiUrl = "https://servicodados.ibge.gov.br/api/v1/localidades"

describe("GET /estados", () => {
    it("deve retornar 200 quando encontrar a sigla DF", () => {
        request(apiUrl)
        .get('/estados?orderBy=nome')
        .expect(200)
        .then(response => {
            expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({"sigla": "DF"})]))
        })
    });
});

describe("GET /localidades/paises", () => {
    it("deve retornar 200 quando encontrar Brasil", () => {
        request(apiUrl)
        .get('/paises?orderBy=nome')
        .expect(200)
        .then(response => {
            expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({"nome": "Brasil"})]))
        })
    })
});

describe("GET /estados/{UF}/regioes-imediatas", () => {
    it("deve retornar 404 quando não encontrar a URL", () => {
        request(apiUrl)
        .get('/cidade')
        .expect(404)
        .then(response => {
            expect(response.status).toEqual(404)
        })
    })
});

describe("GET /municipios", () => {
    it("deve retornar 200 quando encontrar município Abaetetuba", () => {
        request(apiUrl)
        .get('/municipios?orderBy=nome')
        .expect(200)
        .then(response => {
            expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({"nome": "Abaetetuba"})]))
        })
    })
});