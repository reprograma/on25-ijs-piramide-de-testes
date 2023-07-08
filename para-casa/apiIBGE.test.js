const request = require('supertest');
const apiUrlIBGE = "http://servicodados.ibge.gov.br/api/docs/localidades/";



describe("GET paises/{pais}", () => {
    it("should return 200 when finding country 32", () => {
        request(apiUrlIBGE)
        .get('paises/32')
        .expect(response => {
            expect(response.status).toBe(200);
            expect(response.body.nome).toEqual("Argentina");
        })
    })
})


describe("GET distritos", () => {
    it("should return an empty object when passing an inexistent UF id", () => {
        request(apiUrlIBGE)
        .get('estados/abc/distritos')
        .then(response => {
            expect(response.status).toBe(404)
            expect(response).toEqual({});
        })
    })
})


describe("GET estados/{UF}/municipios", () => {
    it("should return all  ", () => {
        request(apiUrlIBGE)
        .get('estados/33/municipios')
        .then(response => {
            expect(response.status).toBe(200);
            expect(response.body).toEqual(
                expect.arrayContaining(
                    [expect.objectContaining(
                        {"nome": "Rio de Janeiro"}
                    )]
                )
            );
        })
    })
})




