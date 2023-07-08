const request = require('supertest');
const apiUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades';


describe('GET /distritos', () => {
    it('should return a name present in the district', () => {
        request(apiUrl)
        .get('distritos')
        .expect(200)
        .then(response => {
            expect(reponse.body.map(obj => obj.nome)).toContain("Abadia")
        });
    });
});

describe('GET /estados/{UF}/distritos', () => {
    it('should return state', () => {
        request(apiUrl)
        .get('/estados/33/distritos')
        .expect(200)
        .then(response => {
            expect(reponse.body.nome).toEqual("Rio de Janeiro")
        });
    });
});

describe('GET /municipios/{municipio}/distritos', () => {
    it('should return the county when found', () => {
        request(apiUrl)
        .get('/municipios/3550308/distritos')
        .expect(200)
        .then(response => {
            expect(reponse.body.nome).toEqual("São Paulo")
        });
    });
});

describe('GET /regioes/{macrorregiao}/distritos', () => {
    it('should return the county when found', () => {
        request(apiUrl)
        .get('/regioes/3/distritos')
        .expect(404)
        .then(response => {
            expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({"nome":"Sudeste", "sigla":"SE"})]))
        });
    });
});