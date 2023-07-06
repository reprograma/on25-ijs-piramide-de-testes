const request = require('supertest');
const apiUrl = "http://servicodados.ibge.gov.br/api/v1/localidades/"

describe("GET /estados", () => {
    it("should return 200 when find state of SP.", async () => {
        await request(apiUrl)
        .get('estados?orderBy=nome')
        .expect(200)
        .then(response => {
            expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({
                "sigla":"SP"})]))
        })
    })
})

describe("GET /estados", () => {
    it("should return 404 when it does not find state of SP.", async () => {
        await request(apiUrl)
        .get('estados')
        .expect(400)
        .then(response => {
            expect(response.status).toEqual(404)
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
        .get('distritos/')
        .expect(404)
        .then(response => {
            expect(response.status).toEqual(404)
        })
    })
})
