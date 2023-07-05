const request = require ('supertest');
const apiUrl = "https://ghibliapi.vercel.app/";

// describe é colocar de uma forma geral o que esse teste está fazendo
describe ("GET/films/{id}", () => {
     it("should return 200 when find Totoro movie", () => {
        request(apiUrl)
        .get('films/58611129-2dbc-4a81-a72f-77ddfc1b1b49')
        .expect(200)
        .then(response => {
            expect (response.body.title).toEqual("My Neighbor Totoro")
        })
     })
});

describe ("GET/ people", ()=>
{
    it ("should return 200 when find a character", ()=>{
        request(apiUrl)
        .get("people")
        .expect(200)
        .then(response => {
            expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({"name":"Ashitaka"})]))
        
        })
    })

});

// tentar retornar o erro 404

describe ("GET/ people", ()=>
{
    
    it ("should return 404 when not find the character", () =>{
        request(apiUrl)
        .get("people")
        .expect(404)
        .then(response => {
            expect(response.body.title).toEqual("akaskuska")
    })
})

});
// com outro item e código 302= found "nao retorna, pq nao tem no cod base
describe ("GET/films/{id}", ()=>
{
    
    it ("should return 302 when find the director", () =>{
        request(apiUrl)
        .get("films/12cfb892-aac0-4c5b-94af-521852e46d6a")
        .expect(302)
        .then(response => {
            expect(response.body.director).toEqual("Isao Takahata")
    })
})

});
