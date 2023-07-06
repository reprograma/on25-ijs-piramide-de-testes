const request = require('supertest');
const apiUrl = "http://servicodados.ibge.gov.br/api/v1/localidades/"

describe("Testing Api IBGE", () => {  
    it("should return status 200 when find a district", async () => {
        const response = await request(apiUrl).get("distritos/520005005");
        expect(response.status).toBe(200);
    });

    it("should return status 200 and country according to id", async () => {
        const response = await request(apiUrl).get("/paises/76");
        console.log(response.body);
        expect(response.status).toBe(200);
        expect(response.body[0].nome).toBe("Brasil");
      });

      it("should return Brasil", async () => {
        const response = await request(apiURL)
        .get("paises/76")
        .expect(200)
        expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({"nome": "Brasil"})]))
    })

});

describe("GET /estados/{UF}/regioes-imediatas", () => {
  it("should return 404 when not finding URL", () => {
      request(apiUrl)
      .get('/cidade')
      .expect(404)
      .then(response => {
          expect(response.status).toEqual(404)
      })
  })
});

