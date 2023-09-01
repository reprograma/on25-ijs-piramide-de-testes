const request = require('supertest')
const ApiUrl = "https://servicodados.ibge.gov.br/api/v1/localidades"

describe('GET /estados', () => {


    it('deve realizar busca pelo município de São Paulo', () => {
        const estadoSaoPaulo = () => expect.arrayContaining([expect.objectContaining({ "nome": "São Paulo" })])
        const municipioSaoPaulo = expect.estadoSaoPaulo({ nome: 'São Paulo' });
    
        request(ApiUrl)
        .get('/estados')
        .expect(200)
        .then(response => {
            expect(response.body).toEqual(municipioSaoPaulo)
        })
    });
    
    it('deve retornar um array vazio ao buscar municípios em um estado inválido', () => {
        request(ApiUrl)
            .get('/estados/00/municipios')
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual([]);
            })
    });
})