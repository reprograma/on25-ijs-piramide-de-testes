const request = require("supertest");
const apiUrl = "http://servicodados.ibge.gov.br/api/v1/localidades";

describe("Testing IBGE's Api", () => {
  it("Should return Armênia country ", () => {
    request(apiUrl)
      .get("/paises/51")
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual(
          expect.arrayContaining([expect.objectContaining({ nome: "Armênia" })])
        );
      });
  });

  it("Should return cities of the microregion of Erechim", () => {
    request(apiUrl)
      .get("/microrregioes/43004/distritos")
      .expect(200)
      .then((res) => {
        const city = res.body.map((obj) => obj.nome);
        expect(city).toEqual(
          expect.arrayContaining(["Três Arroios", "Severiano de Almeida"])
        );
      });
  });

  it("Should return metropolitan regions of SC ", () => {
    request(apiUrl)
      .get("/estados/42/regioes-metropolitanas")
      .expect(200)
      .then((res) => {
        const regions = res.body.map((obj) => obj.nome);
        expect(regions).toEqual(
          expect.arrayContaining([
            "Região Metropolitana de Florianópolis",
            "Região Metropolitana de Tubarão",
          ])
        );
      });
  });

  it(" should return status code 404 when accessing a non-existent resource", async () => {
    const recursoId = 999;
    const response = await request(apiUrl).get(`/recurso/${recursoId}`);
    expect(response.status).toBe(404);
  });
});
