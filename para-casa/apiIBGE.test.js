/* - Exercício 1 - API de localidades (IBGE): 
Teste pelo menos 4 endpoints da [API de localidades do IBGE](https://servicodados.ibge.gov.br/api/docs/localidades), cobrindo caminhos felizes e infelizes. Exercite sua autonomia no aprendizado e fique a vontade para usar diferentes matchers do jest e acessar diferentes respostas com o supertest. */

const request = require("supertest");
const apiUrl = "https://servicodados.ibge.gov.br/api/v1/localidades/";

describe("GET estados/ {id} /distritos", () => {
  it("should return status 200 when finds Rio de Janeiro UF", async () => {
    const response = await request(apiUrl).get("estados/33");
    expect(response.status).toBe(200);
    expect(response.body.nome).toBe("Rio de Janeiro");
  });

  it("should return error 404 trying to find Rio de Janeiro UF", async () => {
    const response = await request(apiUrl).get("estados/cidades/0");
    expect(response.status).toBe(404); //altera a rota do get para uma URL que não existe no servidor, retornando assim o erro 404

    expect(response.body.nome).toBe(undefined);
  });
});

describe("GET /regioes-imediatas/330002|330005/distritos", () => {
  it("should return cities around Angra dos Reis and Resende regions", async () => {
    const response = await request(apiUrl).get(
      "regioes-imediatas/330002|330005/distritos"
    );
    expect(response.status).toBe(200);
    console.log(response.status);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          nome: "Paraty",
          nome: "Visconde de Mauá",
          nome: "Angra dos Reis",
        }),
      ])
    );
  });

  it("should force error 500 (Internal Server Error) when trying to find citied around Angra and Resende", async () => {
    const response = await request(apiUrl).get("regioes-imediatas/330002|");
    expect(response.status).toBe(500); //500 - Internal Server Error
    expect(response.body).toEqual({
      message: "Internal server error",
      statusCode: 500,
    });
  });
});
