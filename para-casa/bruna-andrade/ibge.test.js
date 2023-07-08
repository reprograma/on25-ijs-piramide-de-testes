const request = require("supertest");
const apiUrl = "http://servicodados.ibge.gov.br/api/v1/localidades";

const estadoId = 26;
const paisId = 76;
const regiaoId = 2;

describe("GET /estados/{id}", () => {
  it("should return code 200 and status according to id", async () => {
    const res = await request(apiUrl).get(`/estados/${estadoId}`);
    expect(res.status).toBe(200);
    expect(res.body.nome).toBe("Pernambuco");
  });
  it("should return code 404 when the state does not exist", async () => {
    const res = await request(apiUrl).get("/estados/222");
    expect(res.status).toBe(404);
  });
});

describe("GET /países/{país}", () => {
  it("should return the code 200 and the country according to the id", async () => {
    const res = await request(apiUrl).get(`/paises/${paisId}`);
    expect(res.status).toBe(200);
    expect(res.body[0].nome).toBe("Brasil");
  });
});

describe("/regioes/{microrregiao}", () => {
  it("should return status 200 and region as per id", async () => {
    const res = await request(apiUrl).get(`/regioes/${regiaoId}`);
    expect(res.status).toBe(200);
    expect(res.body.nome).toBe("Nordeste");
  });
});