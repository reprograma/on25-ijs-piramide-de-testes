const request = require('supertest') 
const apiUrl = "https://servicodados.ibge.gov.br/api/docs/localidades/"

describe('GET/ paises/{M49}', () =>{
    it('should return 200 when Butão is found', () => {
        request(apiUrl)
        .get('/paises/64')
        .expect(200)
        .then(response => {
            expect(response.body.map(obj => obj.nome)).toContain(["Butão"])

        })
    })
})

describe('Get /estados/{id}', () => {
    it('should return 200 when the request state of Minas Gerais is found', () => {
        request(apiUrl)
        .get('/estados/31')
        .expect(200)
        .then(response => {
            expect(response.body.map(obj => obj.nome)).toContain("Minas Gerais")        
        })
    })

    it('Should return error 404 when an invalid state are requested', () => {
        request(apiUrl)
        .get('/BR/state')
        .expect(404)
        .then(response => {
            expect(response.error).toBe(404)
        })
    })
})

describe('Get/ estados/{UF}/distritos', () => {
    it('should return 200 when Belo Horizonte is found', () => {
        request(apiUrl)
        .get('/BR/state/city')
        .expect(200)
        .then(response => {
            expect(response.body.map(obj => obj.nome)).toContain("Belo Horizonte")
        })

    })
})

describe('GET/ regioes/{macrorregiao}/mesorregioes', () => {
    it('Should return 200 when the mesoregion Jequitinhonha is found', () => {
        request(apiUrl)
        .get('/regioes/SE/mesorregioes')
        .expect(200)
        .then(response => {            
            expect( response.body.map(obj => obj.nome)).toContain(["Jequitinhonha"])
        })
    })
})
