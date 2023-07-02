/* - Exercício 1 - API de localidades (IBGE): 
Teste pelo menos 4 endpoints da [API de localidades do IBGE](https://servicodados.ibge.gov.br/api/docs/localidades), cobrindo caminhos felizes e infelizes. Exercite sua autonomia no aprendizado e fique a vontade para usar diferentes matchers do jest e acessar diferentes respostas com o supertest. */

const request = require("supertest");
const apiUrl = "https://servicodados.ibge.gov.br/api/v1/localidades/";

describe("GET estados/ {id} /distritos", () => {
  it("should return 200 when finds Rio de Janeiro UF", async () => {
    const response = await request(apiUrl).get("estados/33");
    expect(response.status).toBe(200);
    expect(response.body.nome).toBe("Rio de Janeiro");
  });
  it("should return error 404 trying to find Rio de Janeiro UF", () => {
    request(apiUrl)
      .get("cidades/33")
      .expect(404) //altera a rota do get para uma URL que não existe no servidor, retornando assim o erro 404
      .then((response) => {
        expect(response.body.nome).toBe("Rio de Janeiro");
      });
  });
});

describe("GET regioes/{ id }/municipios", () => {
  it("should return all districts of Rio de Janeiro", async () => {
    await request(apiUrl)
      .get("regioes/3/municipios")
      .expect(200)
      .then((response) => {
        console.log(response.status);
        console.log(response.body);
      });
  });
});
