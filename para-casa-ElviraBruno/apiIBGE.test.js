const request = require("supertest");
const apiUrl = "https://servicodados.ibge.gov.br/api/v1/localidades";

describe("GET/distritos?orderBy=nome", () => {
  it("should return 200", () => {
    request(apiUrl)
      .get("/distritos?orderBy=nome")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(expect.arrayContaining(["municipio"]));
      });
  });
});

describe("GET/municipios/3550308/distritos", () => {

it("should return 200", () => {
  request(apiUrl)
    .get("/municipios/3550308/distritos")
    .expect(200)
    .then((response) => {
      expect(response.body).toEqual(
        expect.arrayContaining([expect.objectContaining({ "nome": "Freguesia do Ó" })])
      );
    });
})});

describe("GET/paises?orderBy=nome", () => {
    it("should return 200", () => {
      request(apiUrl)
        .get("/paises?orderBy=nome")
        .expect(200)
        .then((response) => {
          expect(response.body).toEqual(expect.arrayContaining(["nome"]));
        });
    });
  });

  describe("GET/estados?orderBy=nome", () => {
    it("should return 200", () => {
      request(apiUrl)
        .get("/estados?orderBy=nome")
        .expect(200)
        .then((response) => {
          expect(response.body).toEqual(expect.arrayContaining(["nome"]));
        });
    });
  });
