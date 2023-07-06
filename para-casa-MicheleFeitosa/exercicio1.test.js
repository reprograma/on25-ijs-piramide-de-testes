const request = require("supertest");
const apiUrl = "http://servicodados.ibge.gov.br/api/v1/localidades"

// Testar pelo menos 4 endpoints da API do IBGE

describe("GET /estados/{id}", () => {
    test("should return 200 and state according to id", async () => {
      const response = await request(apiUrl).get("/estados/29");
      expect(response.status).toBe(200);
      expect(response.body.nome).toBe("Bahia");
    });
  

    test(" should return 404 when state does not exist", async () => {
      const response = await request(apiUrl).get("/estados/BUA");
      console.log(response.body)
      expect(response.status).toBe(404);
    });

  });

  describe("GET /países/{país}", () => {
    
    test("should return 200 and country according to id", async () => {
      const response = await request(apiUrl).get("/paises/76");
      console.log(response.body);
      expect(response.status).toBe(200);
      expect(response.body[0].nome).toBe("Brasil");
    });
  });



 