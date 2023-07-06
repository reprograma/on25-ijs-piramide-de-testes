const request = require("supertest");
const apiUrl = "http://servicodados.ibge.gov.br/api/docs/localidades/";

describe("GET /estados/{UF}", () => {
  it("deve retornar 200 quando encontrar a Paraíba", () => {
    request(apiUrl)
      .get("estados/25")
      .expect(200)
      .then((response) => {
        expect(response.body.nome).toEqual("Paraíba");
      });
  });
});

describe("GET regioes/{macrorregiao}/estados", () => {
  it("deve retornar o erro quando não encontrar o estado informado", () => {
    request(apiUrl)
      .get("regioes/2/estados")
      .expect(404)
      .then((response) => {
        expect(response.body).toEqual(
          expect.arrayContaining([expect.objectContaining({ nome: "Paraná" })])
        );
      });
  });
});

describe("GET /municipios/{municipio}", () => {
  it("deve retornar 404 quando não encontrar o municio", () => {
    request(apiUrl)
      .get("/municipios/250409")
      .expect(200)
      .then((response) => {
        expect(response.body.nome).toEqual("Campina Grande");
      });
  });
});

describe("GET mesorregioes/{mesorregiao}/distritos", () => {
  it("deve retornar 200 quando encontrar o código do distrito informado", () => {
    request(apiUrl)
      .get("mesorregioes/2501/distritos")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.arrayContaining([expect.objectContaining({ id: "250375305" })])
        );
      });
  });
});