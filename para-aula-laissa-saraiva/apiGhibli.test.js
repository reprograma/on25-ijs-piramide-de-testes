const request = require('supertest');
const apiUrl = "https://ghibliapi.vercel.app";


describe("GET /films/{id}", ()=> {
  it("should return 200 when fin 'My Neighbor TOTORO'", ()=> {
    request(apiUrl)
    .get('films/58611129-2dbc-4a81-a72f-77ddfc1b1b49')
    .expect(200)
    .then(response => {
      expect(response.body.title).toEqual("My Neighbor Totoro");
    })
  })
})

// Primeiro acessa o Array, e depois acessa o objeto
describe("GET /people", () => {
  it("should return 200 when find a character", ()=> {
    request(apiUrl)
    .get('/people')
    .expect(200)
    .then(response => {
      expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({"name":"Ashitaka"})]))
    })
  })
})