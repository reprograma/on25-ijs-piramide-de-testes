const request = require('supertest')
const ApiUrl = "https://servicodados.ibge.gov.br/api/v1/localidades"

describe('GET /estados', () => {


    it('deve realizar busca pelo município de Ananindeua', () => {
        const estadoPara = () => expect.arrayContaining([expect.objectContaining({ "nome": "Pará" })])
        const municipioAnanindeua = estadoPara([expect.objectContaining({ "nome": "Ananindeua" })])

        request(ApiUrl)
            .get('/estados')
            .expect(200)
            .then(response => {
                expect(response.body).toEqual(municipioAnanindeua)
            })
    })

    it('deve retornar 404 ao tentar buscar uma url inexistente', () => {

        request(ApiUrl)
            .get('/estados/25/municipio') //atenção aqui para o erro de digitação, coloqueio 'município' no singular de propósito
            .expect(404)
            .then(response => {
                expect(response.notFound)
            })
    })

    it('deve retornar vazio ao tentar buscar um estado inexistente', () => {

        request(ApiUrl)
            .get('/estados/100')
            .expect(200)
            .then(response => {
                expect(response.body).toEqual([])
            })
    })
})
/* importante que isso é apenas alguns cenários que podem ser feitos
casos tenham feito outros tudo bem
 */