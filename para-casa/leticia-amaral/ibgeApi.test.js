const request = require('supertest');
const apiUrl = "https://servicodados.ibge.gov.br";

describe("GET /paises", () => {
  it("should return a country with name Brasil", () => {
    request(apiUrl)
    .get("/api/v1/localidades/paises/76")
    .expect(200)
    .then(response => {
      expect(response.body.nome).toEqual("Brasil");
    });
  });

  it("should return a list for countrys containing name República da Coreia", () => {
    request(apiUrl)
    .get("/api/v1/localidades/paises")
    .expect(200)
    .then(response => {
      expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({"nome": "República da Coreia"})]))
    })
  })
})

describe("GET /estados", () => {
  it("should return object with first id ", () => {
    request(apiUrl)
    .get("/api/v1/localidades/estados?orderBy=nome")
    .expect(400)
    .then(response => {
      expect(response.body[0].id).toEqual(1)
    })
  })

  it("should return Rio de Janeiro with id 33", () => {
    request(apiUrl)
    .get("/api/v1/localidades/estados/33")
    .expect(200)
    .then(response => {
      expect(response.body.nome).toEqual("Rio de Janeiro")
    })
  })
})