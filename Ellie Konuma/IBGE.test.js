const request = require("supertest");
const apiUrl = "https://servicodados.ibge.gov.br";

describe("Testing API of IBGE", () => {
  it("should return the state São Paulo", () => {
    request(apiUrl)
      .get("/api/v1/localidades/estados/35")
      .expect(200)
      .then((response) => {
        expect(response.body.nome).toEqual("São Paulo");
      });
  });

  it("should return an array with all States, including Rondônia", () => {
    request(apiUrl)
      .get("/api/v1/localidades/estados")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({ nome: "Rondônia" }),
          ])
        );
      });
  });

  it("should return the country Austrália and specifications", () => {
    request(apiUrl)
      .get("/api/v1/localidades/paises/40")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              id: { "ISO-ALPHA-2": "AT", "ISO-ALPHA-3": "AUT", M49: 40 },
              nome: "Áustria",
              "regiao-intermediaria": null,
              "sub-regiao": {
                id: { M49: 155 },
                nome: "Europa ocidental (Oeste da Europa)",
                regiao: { id: { M49: 150 }, nome: "Europa" },
              },
            }),
          ])
        );
      });
  });

  it("should return Brasil", () => {
    request(apiUrl)
      .get("/api/v1/localidades/paises/76")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.arrayContaining([expect.objectContaining({ nome: "Brasil" })])
        );
      });
  });
  it("should return an Error === []", () => {
    request(apiUrl)
      .get("/api/v1/localidades/paises/76098")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual([]);
      });
  });
});
