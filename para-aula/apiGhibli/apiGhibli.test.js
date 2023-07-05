const request = require('supertest'); //para request http
const apiUrl = "https://ghibliapi.vercel.app/";

describe("GET /films/{id}", () => {
    it("Should return 200 when finding totoro's movie", () => {
        request(apiUrl)
        .get('films/58611129-2dbc-4a81-a72f-77ddfc1b1b49')
        .expect(200)
        .then(response => {
            expect(response.body.title).toEqual("My Neighbor Totoro")
        })
    })
})

describe("GET /people", () => {
    it("Should return 200 when finding a character", () => {
        request(apiUrl)
        .get('people')
        .expect(200)
        .then(response => {
            expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({"name": "Ashitaka"})]))
        })
    })
})

