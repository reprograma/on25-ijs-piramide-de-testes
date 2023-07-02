/* - Exercício 1 - API de localidades (IBGE): 
Teste pelo menos 4 endpoints da [API de localidades do IBGE](https://servicodados.ibge.gov.br/api/docs/localidades), cobrindo caminhos felizes e infelizes. Exercite sua autonomia no aprendizado e fique a vontade para usar diferentes matchers do jest e acessar diferentes respostas com o supertest. */

const request = require("supertest");
const apiUrl = "https://servicodados.ibge.gov.br/api/v1/localidades/";

describe("GET estados/ {id} /distritos", () => {
  it("should return 200 when finds Rio de Janeiro UF", () => {
    request(apiUrl)
      .get("estados/33")
      .expect(200)
      .then((response) => {
        expect(response.body.nome).toEqual("Rio de Janeiro");
      });
  });
});
