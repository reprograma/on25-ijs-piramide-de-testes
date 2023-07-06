const request = require('supertest');

const apiUrl = "http://servicodados.ibge.gov.br/api/v1";

describe("GET /localidades/distritos/", () => {
  it("deveria retornar status code 200 quando encontrar Entre Rios", () => {
    request(apiUrl)
      .get("/localidades/distritos") 
      .expect(200)
      .then(response => {
        expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({ "nome": "Entre Rios" })]));
      });
  });
});

describe("GET /localidades", () => {
  test("deveria retornar status code 200 quando encontrar um município chamado Goiânia", () => {
    request(apiUrl)
      .get("/localidades/municipios") 
      .expect(200)
      .then(response => {
        expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({ "nome": "Goiânia" })]));
      });
  });
});


describe("GET /localidades/municipios/:id", () => { 
  test("deveria retornar status code 200 quando encontrar o ID 1600303", async () => {
    const response = await request(apiUrl)
      .get("/localidades/municipios/1600303") 
      .expect(200);
    expect(response.status).toBe(200);
  });
});

describe("GET /localidades/paises", () => {
  test("deveria retornar status code 200 quando encontrar o país Afeganistão", async () => {
    const response = await request(apiUrl)
      .get("/localidades/paises") 
      .expect(200);
    expect(response.body[0].nome).toEqual("Afeganistão"); 
  });
});
