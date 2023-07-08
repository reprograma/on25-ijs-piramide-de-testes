const request = require ('supertest')
const apiUrl = "http://servicodados.ibge.gov.br/api/v1/localidades/"


describe ('verify api endpoints from ibge locations', () => {

    it('should return 200 when find the country Brasil', () => {
        request(apiUrl)
        .get('paises/76')
        .expect(200)
        .expect(response => {
            expect(response.body.nome).toEqual('Brasil')
        })
    })
  
    it('should return 200 when find a district', () => {
        request(apiUrl)
        .get('estados?orderBy=nome')
        .expect(200)
        .then(response => {
            expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({'nome': "Acre"})]))
        })
    })

    it('should return 200 when find an array of regions', () => {
        request(apiUrl)
        .get('regioes?orderBy=nome')
        .expect(200)
        .expect(response => {
            expect(response.body).toEqual(expect.arrayContaining(
                {"id":5,"sigla":"CO","nome":"Centro-Oeste"},
                {"id":2,"sigla":"NE","nome":"Nordeste"},
                {"id":1,"sigla":"N","nome":"Norte"},
                {"id":3,"sigla":"SE","nome":"Sudeste"},
                {"id":4,"sigla":"S","nome":"Sul"}))
        })
    })
   
    it('should return the first region from date base', () => {
        request(apiUrl)
        .get('regioes/1')
        .expect(200)
        .then(response => {
            expect(response.body.nome).toEqual('Norte')
        })
    })

    it('should return 400 when the region does not match with city', () => {
        request(apiUrl)
        .get('regioes/4/municipios')
        .expect(400)
        .expect(response => {
            expect(response.body.nome).toEqual('Abadia dos Dourados')
        })
    })

        it("should return 404 when the id does not exist", async () => {
        const response = await request(apiUrl)
        .get('estados/asdsad')
        expect(404)
        expect(response.body.id).toEqual()
    })

})

