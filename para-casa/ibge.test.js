const request = require('supertest') 
const apiURL = "http://servicodados.ibge.gov.br/api/v1/localidades/"

describe("testing IBGE end points", () => {
    it("should return the district of Rio de janeiro", async () => {
        const response = await request(apiURL).get("estados/33").expect(200);
        expect(response.body.nome).toEqual("Rio de Janeiro");    
    })

    it("should match regex that matches the IBGE json", async () => { // A ideia desse teste era passar um regex que servisse para o Json de distritos e usar o toMatch, mas não está funcionando
        const regex = /\{[^{}]*\}/
        const response = await request(apiURL)
        .get("distritos?orderBy=nome")
        .expect(200)
        expect(response.body.array).toMatch(regex)

    })

    it("should return an array with all States, including Rondônia", async () => {
        const response = await request(apiURL)
        .get("estados")
        .expect(200)
        expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({"nome": "Rondônia"})]))
    
    })

    it("should show that the array of objects in districts is defined and bigger then 100", async () => {
        const res = await request(apiURL)
            .get("distritos?orderBy=nome")
            .expect(200)
            expect(res.body).toBeDefined()
            expect(res.body.length).toBeGreaterThan(100);
    });

    it("should return Brasil", async () => {
        const response = await request(apiURL)
        .get("paises/76")
        .expect(200)
        expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({"nome": "Brasil"})]))
    
    })

    it('should return 404 Bad Request for invalid data', async () => { // não está funcionando, continua recebendo 200
        const response = await request(apiURL)
        .get("paises/1000000")
        expect(response.status).toEqual(404);
      });
})

