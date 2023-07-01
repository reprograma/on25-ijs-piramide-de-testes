const request = require('supertest') // a profa já tinha instalado o supertest, aí bastou dar o npm i que já está, tá lá no package.json
const apiURL = "https://ghibliapi.vercel.app/" // chamando a api do ghibli

describe("GET /films/{id}", () => {// colocar de uma forma geral o que esse teste tá fazendo
                            // sabemos que essa rota existe porque está lá descrita na API
    it("should return 200 when finds Totoro movie", () => { // quero que retorne 200 ao encontrar o filme
        request(apiURL)
        .get('films/58611129-2dbc-4a81-a72f-77ddfc1b1b49') // rota e id que está lá na api
        .expect(200) // código de sucesso
        .then(response => { //response  é da requisição
            expect(response.body.title).toEqual("My Neighbor Totoro") // body é o corpo da requisição, o title tá lá no json da API
        })

    })
}); 

describe("GET /people", () => {
    it("should return 200 when finds a character ", () => { // se colocar um x antes do it quando rodar o describe pula esse (skip)
        request(apiURL)
        .get("people") // essa rota "people" está lá na api deles, estamos buscando um personagem dentro da array
        .expect(200)
        .then(response => {             //arrayContaning e objectContaining são funções nativas
            expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({"name": "Yakul"})])) // em people é um array, em filme era objeto
        })

    })
})