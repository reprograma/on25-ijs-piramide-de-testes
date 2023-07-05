const request = require("supertest");
const apiUrl = "http://servicodados.ibge.gov.br/api/v1/localidades";

describe("GET /estados/{id}", () => {
  it("deve retornar o status 200 e o estado de acordo com o id", async () => {
    const response = await request(apiUrl).get("/estados/33");
    expect(response.status).toBe(200);
    expect(response.body.nome).toBe("Rio de Janeiro");
  });

  //O TESTE FALHA NO STATUS 404 PQ RETORNA UM ARRAY VAZIO QND N EXISTE 
  it("deve retornar status 404 quando o estado não existir", async () => {
    const response = await request(apiUrl).get("/estados/AAA");
    console.log(response.body)
    expect(response.status).toBe(404);
  });
});

describe("GET /municipios", () => {
  it("deve retornar status 200 e uma lista com os municipios do Brasil", async () => {
    const response = await request(apiUrl).get("/municipios");
    console.log(response.body);
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });
});
describe("GET /países/{país}", () => {
  it("deve retornar o status 200 e o país de acordo com o id", async () => {
    const response = await request(apiUrl).get("/paises/76");
    console.log(response.body);
    expect(response.status).toBe(200);
    expect(response.body[0].nome).toBe("Brasil");
  });
});
describe("/regioes/{macrorregiao}", () => {
  it("deve retornar o status 200 e a região de acordo com o id", async () => {
    const response = await request(apiUrl).get("/regioes/2");
    console.log(response.body);
    expect(response.status).toBe(200);
    expect(response.body.nome).toBe("Nordeste");
  });

  it("deve retornar o status 405 ao tentar enviar dados", async () => {
    const requestBody = {
      id: 6,
      sigla: "R",
      nome: "Região6",
    };
    const response = await request(apiUrl).post("/regioes").send(requestBody);
    console.log(response.body);
    expect(response.status).toBe(405);
  });
});
describe("Erro 404", () => {
  it("deve retornar o status 404 ao acessar um endpoint inexistente", async () => {
    const response = await request(apiUrl).get("/endpointinexistente");
    expect(response.status).toBe(404);
  });
});

