const request = require('supertest');
const apiUrl = "http://servicodados.ibge.gov.br/api/v1/localidades/"

describe("GET distritos{id}", () => {  
    test("should return status 200 when find a district", async () => {
        const response = await request(apiUrl).get("distritos/520005005");
        expect(response.status).toBe(200);

    })

    test("should return Serra Talhada when id is 2603", () => {
        request(apiUrl).get("regioes-intermediarias/2603").expect(200).then(response => {
            expect(response.body.nome).toEqual("Serra Talhada")
        })
    })


    test("should return status 500 when the id is wrong", async () => {
        const response = await request(apiUrl).get("distritos/string");
        expect(response.status).toBe(500)
    })

    test("should recognize the /cena/ piece when find the id 310037 for Barbacena", async () => {
        const response = await request(apiUrl).get("regioes-imediatas/310037").expect(200)
        .then(response => {
            expect(response.body.nome).toMatch(/cena/)
        })
    })
})


