const req = require('supertest')
const apiUrl = 'http://servicodados.ibge.gov.br/api/v1'

UF_ARRAY = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO']

describe("Testing /localidades/estados/{UF}/municipios", () => {
    for(let index = 0; index < UF_ARRAY.length; index++){
        test(`Tests for all UF in Brazil - ${UF_ARRAY[index]}`,async () => {
            const res = await req(apiUrl)
                .get(`/localidades/estados/${UF_ARRAY[index]}/municipios`)
            expect(res.status).toBe(200)
            expect(res.body.length).toBeGreaterThan(0)
        })
    }
    test(`Tests for inexistent UF`,async () => {
        const res = await req(apiUrl)
            .get(`/localidades/estados/AA/municipios`)
        expect(res.status).toBe(200)
        expect(res.body.length).toBe(0)
    })
})

describe("Testing /localidades/paises/{pais}", () => {
    for(let country = 31; country < 33; country++){
        test(`Tests for country with id ${country}`, async () => {
            const res = await req(apiUrl).get(`/localidades/paises/${country}`)
            expect(res.body.length).toBeGreaterThan(0)
        })
    }
    test('Tests for non existing country', async () => {
        const res = await req(apiUrl).get(`/localidades/paises/999`)
        expect(res.body.length).toBe(0)
    })
})

describe('Testing /localidades/regioes', () => {
    test('tests if answers all 5 regiões', async () => {
        const res = await req(apiUrl).get('/localidades/regioes')
        expect(res.body).toEqual([
            {
              "id": 1,
              "sigla": "N",
              "nome": "Norte"
            },
            {
              "id": 2,
              "sigla": "NE",
              "nome": "Nordeste"
            },
            {
              "id": 3,
              "sigla": "SE",
              "nome": "Sudeste"
            },
            {
              "id": 4,
              "sigla": "S",
              "nome": "Sul"
            },
            {
              "id": 5,
              "sigla": "CO",
              "nome": "Centro-Oeste"
            }
          ])
    })
})

describe('Testing /localidades/estados/{UF}/regioes-imediatas', () => {
    for(let index = 0; index < UF_ARRAY.length; index++){
        test(`checks for all UF - ${UF_ARRAY[index]}`, async () => {
            const res = await req(apiUrl).get(`/localidades/estados/${UF_ARRAY[index]}/regioes-imediatas`)
            expect(res.body.length).toBeGreaterThan(0)
        })
    }
    test(`checks for inexistent UF - AA`, async () => {
        const res = await req(apiUrl).get(`/localidades/estados/AA/regioes-imediatas`)
        expect(res.body.length).toBe(0)
    })
})