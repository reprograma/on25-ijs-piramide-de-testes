const request = require("supertest");
const apiUrl = "https://servicodados.ibge.gov.br/api/v1/localidades/"

describe("GET / api do IBGE" , () => {
  it("Deve retornar retornar o Estado 'Rio de Janeiro' e o status 200", async() => {
    const response = await request(apiUrl).get("estados/33");
    expect(response.status).toBe(200);
    expect(response.body.nome).toMatch("Rio de Janeiro");
  })

  it("Deve retornar o id e nome do Município Rio de Janeiro", async() => {
    const response = await request(apiUrl).get("municipios/3304557");
    expect(response.body.id).toEqual(3304557)
    expect(response.body.nome).toMatch("Rio de Janeiro")
  })

  it("Deve retornar o nome do país Brasil", async() => {
    const response = await request(apiUrl).get("paises/76");
    expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({"nome":"Brasil"})]))
  })

  it("Deve retornar o nome do país Brasil e Argentina", async() => {
    const response = await request(apiUrl).get("paises/76|32");
    expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({"nome":"Brasil"})]))
    expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({"nome":"Argentina"})]))
  })


  it("Deve apresentar erro 404, devido path inválido", async() => {
    const response = await request(apiUrl).get("pais/76");
    expect(response.status).toBe(404);
  })


  it("Deve retornar [] vazio, pois caminho não existe", async() => {
    const response = await request(apiUrl).get("/estados/1");
    expect(response.body).toMatchObject([])

    console.log(response.body)
  })

  it("Deve retornar erro 500, pois a Api espera receber informações de dois endpoints e só recebe de um", async() => {
    const response = await request(apiUrl).get("paises/76|");
    expect(response.status).toEqual(500)
console.log(response.status)
  })
})