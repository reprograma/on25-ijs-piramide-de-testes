const request = require('supertest');
const apiUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades';

describe("GET/distritos/{id}", () => {
  it('should return 200 when find "Abadia de Goiás', () => {
    request(apiUrl)
      .get("/distritos/520005005")
      .expect(200)
      .then((response) => {
        expect(response.body.nome).toEqual("Abadia de Goiás");
      });
  });
});