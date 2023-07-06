/*
*******************************************************************************
*******************************************************************************
  Testes de Integração

  - Exercício 1 - API de localidades (IBGE): 
  Teste pelo menos 4 endpoints da [API de localidades do IBGE](https://servicodados.ibge.gov.br/api/docs/localidades), cobrindo caminhos felizes e infelizes. Exercite sua autonomia no aprendizado e fique a vontade para usar diferentes matchers do jest e acessar diferentes respostas com o supertest.

*******************************************************************************
*******************************************************************************
*/

const request = require('supertest');
const apiUrl = "https://servicodados.ibge.gov.br/api/v1/localidades/";

describe("GET Api IBGE endpoint microrregioes/{$microrregiao}", () => {
  it("Should return 200 when find microrregioes id 41021", async () => {
    const response = await request(apiUrl)
    .get('microrregioes/41021')
    .expect(200)
    expect(response.body.nome).toEqual("Ponta Grossa")      
  })

  it("Should return 404 when find microrregioes/{$microrregiao}", () => {
    request(apiUrl)
    .get("microrregioes")
    .expect(404)
    .then(response => {
      expect(response.body.nome).toBeUndefined("");
    })
  });
});

describe("GET estados/{UF}/regioes-intermediarias", () => {
  it("Should return 200 when find estados/41/distritos", () => {
    request(apiUrl)
    .get("estados/41/distritos")
    .expect(200)
    .then(response => {
      expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({"nome":"Curitiba"})]))
    })
  })  

  it("Should return 200 when find regioes/{macrorregiao}/distritoss", () => {
    request(apiUrl)
    .get("regioes/4/distritos")
    .expect(200)
    .then(response => {
      expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({"nome":"Florianópolis"})]))
    })
  })  
});