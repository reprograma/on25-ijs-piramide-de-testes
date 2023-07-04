const request = require('supertest');
const apiUrl = "http://servicodados.ibge.gov.br/api/v1/localidades/"

describe("GET /estados/{UF}/distritos", () => {
    it("should return 200 when find state of SP.", async () => {
        await request(apiUrl)
        .get('estados/35/distritos')
        .expect(200)
        .then(response => {
            expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({
                UF: {"nome":"São Paulo"}})]))
        })
    })
})

describe("GET /distritos/{id}", () => {
    it("it should return 200 when it finds the district of Fazendinha.", async () => {
        await request(apiUrl)
        .get('distritos/160030312')
        .expect(200)
        .then(response => {
            expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({
                "nome":"Fazendinha"})]))
        })
    })
})

describe("GET /distritos/{id}", () => {
    it("should return 404 when it does not find the Fazendinha district.", async () => {
        await request(apiUrl)
        .get('distritos/160030312')
        .expect(404)
        .then(response => {
            expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({
                "nome":"Fazendinha"})]))
        })
    })
})