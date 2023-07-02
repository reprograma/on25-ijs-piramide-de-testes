const request = require('supertest')

const ApiUrl = 'http://servicodados.ibge.gov.br/api/v1/localidades/'

describe('IBGE api get by ID', () => {
    it('should return state accornding the id passed', async () => {
        const mockState = { "id": 33, "nome": "Rio de Janeiro", "regiao": { "id": 3, "nome": "Sudeste", "sigla": "SE" }, "sigla": "RJ" }
        const res = await request(ApiUrl).get('estados/33');
        expect(res.body).toStrictEqual(mockState)
    })

    it('should return state staus 200 according the id passed', () => {
        return request(ApiUrl)
            .get('estados/33')
            .expect(200)
    })

    it('should return state accornding the id passed', async () => {
        const res = await request(ApiUrl).get('distritos?orderBy=nome');
        expect(res.body).toEqual(expect.arrayContaining([expect.objectContaining({"nome": "Rio de Janeiro"})]))
    })


    it('should return status 200 when found name', () => {
        return request(ApiUrl)
            .get('/estados')
            .expect(200)
            .then(response => {
                expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({"nome": "Rio de Janeiro"})]))
            })
       
    })
})

