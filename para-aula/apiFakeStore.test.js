const request = require('supertest') // a profa já tinha instalado o supertest, aí bastou dar o npm i que já está, tá lá no package.json
const apiURL = "https://fakestoreapi.com/"

describe("GET products/{id}", () =>{
    it("should return 200 when product is found by id", () => {
        request(apiURL)
        .get("products/1") // essa é a rota de produtos da api
        .expect(200)
        .then(res => { // esse title faz parte do objeto que está lá na api
            expect(res.body.title).toEqual("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")
        })
    })
    it("should return 200 and return price", () => {
        request(apiURL)
        .get("products/1")
        .expect(200)
        .then(res => {
            expect(res.body.price).toEqual(109.95)
        })
    })

    it("should return error 404 is not found", () => {
        request(apiURL)
        .get("products/1")
        .expect(404)
        .then(res => {
            expect(res.body.price).toEqual(110)
        })
    })
})

describe("GET users", () => { // muda o describe pq estavamos fazendo outra rota
    it("should return 200 when user is found", () => {
        request(apiURL)
        .get("users") // os usuários são uma array de objetos, essa é a rota dos usuários
        .expect(200)
        .then(res => { // dentro de cada objeto na aray vai ter essa propriedade username e o map vai mapear isso.
            expect(res.body.map(obj => obj.username)).toContain("johnd")
        })
    })

    it("should return 200 and user when found by email", () => {
        request(apiURL)
        .get("users") // os usuários são uma array de objetos
        .expect(200)
        .then(res => { // dentro de cada objeto na aray vai ter essa propriedade username e o map vai mapear isso.
            expect(res.body.map(obj => obj.email)).toContain("john@gmail.com")
        })
    })

    it("should return 200 and all users", () => {
        request(apiURL)
        .get("users") // os usuários são uma array de objetos
        .expect(200)
        .then(res => { // pra mostrar a array com todos os usuários
            expect(res.body).toEqual([])
        })
    })


})

describe("POST /products", () => {
    it("send informations and receives 201" ,() => {
    request(apiURL)
    .post("products") //testando a rota de post com produtos
    .send({"id": 1})
    .expect(200, {})
    .then(res => {
        console.log(res.body)
    })
})
})

// fazer dois casos felizes e dois erros