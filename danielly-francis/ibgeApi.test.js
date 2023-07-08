const request = require('supertest');
const apiUrl = "https://servicodados.ibge.gov.br/api/v1/localidades/";

describe('API IBGE tests', () => {
    it("Should return a states list", () => {
        request(apiUrl)
            .get("estados")
            .expect(200)
            .expect(response => {
                expect(response.body).toBeDefined();
                expect(Array.isArray(response.body)).toBe(true);
            })
    });
    it("Should return a specific state", () => {
        request(apiUrl)
            .get("estados/SP")
            .expect(200)
            .expect(response => {
                expect(response.body).toBeDefined();
                expect(response.body.sigla).toBe("SP");
                console.log(response.body.sigla)   
            })
    });
    it("Should return the metropolitan region of Rio de Janeiro datas", () => {
        request(apiUrl)
            .get("estados/33/regioes-metropolitanas")
            .expect(200)
            .expect(response => {
                expect(response.body).toBeDefined();
                expect(Array.isArray(response.body)).toBe(true);
            })
    });
    it("Should return a countries list", () => {
        request(apiUrl)
            .get("paises")
            .expect(200)
            .expect(response => {
                expect(response.body).toBeDefined();
                expect(Array.isArray(response.body)).toBe(true);
                console.log(response)
            })
    })
});