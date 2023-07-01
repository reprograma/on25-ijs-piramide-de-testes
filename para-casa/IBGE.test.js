const request = require("supertest");
const apiUrl = "https://servicodados.ibge.gov.br";

describe("Get a specific district", () => {
  it("should return the district of fazendinha", () => {
    request(apiUrl)
      .get("/api/v1/localidades/distritos/160030312")
      .expect(200)
      .then((response) => {
        expect(response.body.municipio.nome).toEqual("Macapá");
      });
  });
});
