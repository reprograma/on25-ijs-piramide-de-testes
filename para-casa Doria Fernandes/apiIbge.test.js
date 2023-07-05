const request = require ('supertest');
const apiUrl = "http://servicodados.ibge.gov.br/api/v1/localidades/";

// describe é colocar de uma forma geral o que esse teste está fazendo

// Está retornando 200 'ok', dois códigos abaixo tem que passar.
describe ("GET/distritos/{id}", () => {
        it("should return 200 when find the name abadia ", () => {
        request(apiUrl)
        .get('distritos/291790410')
        .expect(200)
        .then(response =>{
        expect (response.body).toEqual(expect.arrayContaining([expect.objectContaining({"nome":"Abadia"})]))
        })
    })
});  

describe ("GET/municipios/distritos", ()=>{
    it("deve retornar 200 quando encontrar nome aricanduva", ()=>{
        request(apiUrl)
        .get('municipios/3550308/distritos')
        .expect(200)
        .then(response =>{
            expect (response.body).toEqual(expect.arrayContaining([expect.objectContaining({"nome":"Aricanduva"})]))
        })
    })
    });

// dois códigos abaixo tem que quebrar
// por ser um array com vários objetos, tem que especificar, para que ele consiga encontrar.
describe ("GET/estados/distritos", ()=>{
    it("deve retornar 200 quando encontrar nome Aperibé", ()=>{
        request(apiUrl)
        .get('estados/33/distritos')
        .expect(200)
        .then(response =>{
            expect (response.body).toEqual(expect.arrayContaining([expect.objectContaining({"nome":"Aberipé"})]))
        })
    })
    });

    // Esse abaixo, tinha que quebrar, mas está quebrando mesmo sem ter que quebrar, então se alguém puder me ajudar eu agradeço
    describe ("GET/municipios/microrregiao", ()=>{
        it("deve retornar 200 quando encontrar o nome Noroeste Fluminense", ()=>{
            request(apiUrl)
            .get('microrregioes/33001/municipios')
            .expect(200)
            .then(response =>{
                expect (response.body).toEqual(expect.arrayContaining([expect.objectContaining({"nome": "Noroeste Fluminense"})]))
            })
        })
        });  




// Código abaixo é da Roberta Amaro, coloquei apenas para ter de conhecimento 
describe("GET /regioes-imediatas/330002|330005/distritos", () => {
    it("should force error 500 (Internal Server Error) when trying to find cities around Angra and Resende", async () => {
    const response = await request(apiUrl).get("regioes-imediatas/330002|");
    expect(response.status).toBe(500); //500 - Internal Server Error
    expect(response.body).toEqual({
      message: "Internal server error",
      statusCode: 500,
    });
  });
});

