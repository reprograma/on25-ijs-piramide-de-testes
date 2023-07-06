const request = require('supertest');
const apiUrl = "https://servicodados.ibge.gov.br";

describe("GET /api/v1/localidades", () => {
 
    it("should return 'RJ' when getting information from region '3' (Southeast)", () => {
        request(apiUrl)
        .get('/api/v1/localidades/regioes/3/estados')
        .expect(200)
        .then(response => {
            expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({"sigla": "RJ"})]));
        })
    });


    it("should return error when trying to find 'RJ' from region '1' (North)", () => {
        request(apiUrl)
        .get('/api/v1/localidades/regioes/1/estados')
        .expect(200)
        .then(response => {
            expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({"sigla": "RJ"})]));
        });
    });



    it("should return 'São Pedro da Aldeia' when getting API response that returns all RJ districts", () => {
        request(apiUrl)
        .get('/api/v1/localidades/estados/33/distritos')
        .expect(200)
        .then(response => {
            expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({"nome": "São Pedro da Aldeia"})]));
        })
    });

    it("should return error when getting API response that returns all RJ districts", () => {
        request(apiUrl)
        .get('/api/v1/localidades/estados/33/distritos')
        .expect(200)
        .then(response => {
            expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({"nome": "Londrina"})]));
        })
    });


    it("should return 404 when trying to access api with invalid url", () => {
        request(apiUrl)
        .get('/api/v1/localidades/estadosssss/33/distritos')
        .expect(404)
        .then(response => {
            return "UF not found"
        })
    });


    it("should return 5 items when getting to get all the regions", () => {
        request(apiUrl)
        .get('/api/v1/localidades/regioes')
        .expect(200)
        .then(response => {
            expect(response.body).toHaveLength(5);
        })
    });


});