// Teste pelo menos 4 endpoints da [API de localidades do IBGE](https://servicodados.ibge.gov.br/api/docs/localidades), cobrindo caminhos felizes e infelizes. Exercite sua autonomia no aprendizado e fique a vontade para usar diferentes matchers do jest e acessar diferentes respostas com o supertest.

const request = require('supertest');
const apiUrl = 'http://servicodados.ibge.gov.br/api/docs/localidades';

describe("Get /estados/{UF}", () => {
    it("Should return a status error 404 when an invalid UF are requested", () => {
        request(apiUrl)
        .get('/estados/BB')
        .expect(404)
        .then(response => {
            expect(response.status).toBe(404);
        })
    });
});

describe("Get /estados/{UF}/distritos", () => {
    it("Should return 200 when Diadema (disctrict of SP) is found", () => {
        request(apiUrl)
        .get('/estados/SP/distritos')
        .expect(200)
        .expect(response => {
            expect(response.body.map(obj => obj.nome)).toContain("Diadema")
        })
    });
});

describe("Get /regioes/{macrorregiao}}", () => {
    it("Should return 200 when SE (macro region of Brazil) is found", () => {
        request(apiUrl)
        .get('/regioes/SE')
        .expect(200)
        .expect(response => {
            expect(response.body.sigla).toEqual("SE")
        })
    });
});

describe("GET /regioes/{macrorregiao}/mesorregioes", () => {
    it("Should return a status 200 if the query retrieves the mesoregion 'Litoral Sul Paulista'", () => {
        request(apiUrl)
        .get('/regioes/SE/mesorregioes')
        .expect(200)
        .expect(response => {
            expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({"nome":"Litoral Sul Paulista"})]))
        })
    });
});