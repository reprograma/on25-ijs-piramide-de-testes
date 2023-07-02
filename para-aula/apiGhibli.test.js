const request = require('supertest')


const ApiUrl = 'https://ghibliapi.vercel.app'

describe('Teste Api Ghibli get/films/{id}', () => {

    it('should return status 200 when found Totoro movie', () => {
        request(ApiUrl)
            .get('/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49')
            .expect(200)
            .then(response => {
                expect(response.body.title).toEqual("My Neighbor Totoro")
            })
    })

    it('should return status 200 when found name', () => {
        request(ApiUrl)
            .get('/people')
            .expect(200)
            .then(response => {
                expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({'name':'Ashitaka'})]))
            })
       
    })

    it("should return a 404 status if '_id' does not exists", async ()=> {
       
        const res = await request(ApiUrl).get('/films/58611129-2dbc-4a81-a72f-77uuuuuu');
        expect(res.status).toBe(404);
    })

  
})






// describe("GET /id", () => {
//     it("should return a 200 status if '_id' is invalid", async ()=> {
       
//         const res = await request(ApiUrl).get('/films/58611129-2dbc-4a81-a72f-77ddfc1b');
//         expect(res.status).toBe(404);
//     })
// })
