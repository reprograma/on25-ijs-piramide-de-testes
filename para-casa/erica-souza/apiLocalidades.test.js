const request = require('supertest');
const apiUrl = "http://servicodados.ibge.gov.br/api/v1/localidades"

describe("GET /estados/{id}", () => {
        it('should get all the states', async () => {
          const response = await request(apiUrl)
          .get('/estados')
          console.log(response)
          expect(response.status).toBe(200);
          expect(response.body.length).toBe(27);
        });
        it('should return the state of Rio de Janeiro', async () => {
            const response = await request(apiUrl)
            .get('/estados/33');
            expect(response.status).toBe(200);
            expect(response.body.nome).toEqual('Rio de Janeiro');
            });
    })

    describe("GET /regioes/{macrorregiao}", () => {
        it('should get all the regions', async () => {
          const response = await request(apiUrl)
          .get('/regioes');
          console.log(response)
          expect(response.status).toBe(200);
          expect(response.body.length).toBe(5);
        });
         it('should return an 404 error for reaching an inexistent endpoint', async () => {
            const response = await request(apiUrl)
            .get('estados/random')
            expect(response.status).toBe(404);
       });
    })

describe("GET /{UF}/municipios", () => {
  it('should get the city of Recife', async () => {
      const response = await request(apiUrl)
      .get('/municipios/2611606');
      expect(response.status).toBe(200);
      expect(response.body.nome).toEqual('Recife');
  })
})