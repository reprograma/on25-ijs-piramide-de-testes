const request = require("supertest");
const apiUrl = "servicodados.ibge.gov.br/api/v1/localidades";

describe("Testes de API", () => {
  it("Deve retornar o status 200", (done) => {
    request(apiUrl)
      .get("/paises")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  it("O teste deve retornar com falha, pois o esperado é status 201", (done) => {
    request(apiUrl)
      .get("/regioes")
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});
describe("GET /regioes/{id}", () => {
  it("Deve retornar status 200 e uma falha de teste quando o ID for 2 e o nome buscado não for Nordeste", (done) => {
    request(apiUrl)
      .get("/regioes/2")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.nome).toEqual("Sul");
        done();
      });
  });

  it("Deve retornar status 200 e a região Nordeste quando o ID for 2", (done) => {
    request(apiUrl)
      .get("/regioes/2")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.nome).toEqual("Nordeste");
        done();
      });
  });
});

describe("GET /estados/ce/municipios", () => {
  it("Deve retornar a lista de municipios do estado do Ceará", (done) => {
    request(apiUrl)
      .get("/estados/ce/municipios")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});
describe("GET /estados", () => {
  it("Deve retornar a lista de Estados da região Norte", (done) => {
    request(apiUrl)
      .get("/estados")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              regiao: expect.objectContaining({
                nome: "Norte",
              }),
            }),
          ])
        );
        done();
      });
  });
});
