const request = require('supertest');
const apiUrl = "http://servicodados.ibge.gov.br/api/v1/localidades/"

describe("GET /localidades and more information from IBGEs site", () =>{
    it("Should return 200, when find distritos", () => {
        request(apiUrl)
        .get("distritos")
        .expect(200)
    }) 

    it("Should return 200 when find municipios from estados", () => {
        const estado = 33;

        request(apiUrl)
        .get(`estados/${estado}/municipios`)
        .expect(200)
    })
})

describe("GET /estados/33/municipios ", () => {
    it("Should return 200 when find municipio de Andra dos Reis", () => {
        request(apiUrl)
        .get("municipios?view=nivelado")
        .expect(200)
        .then(response => {
            expect(response.body.municipio-nome).toEqual("Angra dos Reis")
        })  
    })
})

describe("GET /localidades/paises?orderBy=nome", () => {
    it("Should return 200 when find Alemanha", () => {
        request(apiUrl)
        .get("paises?orderBy=nome")
        .expect(200)
        .then(response => {
            expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({"nome": "Alemanha"})]))
        })
    })
})
