const request = require('supertest')

const ApiUrl = 'http://servicodados.ibge.gov.br/api/v1/localidades/'



describe('IBGE API METHOD GET', () => {
    it('should return state accornding the id passed', async () => {
        const mockState = { "id": 33, "nome": "Rio de Janeiro", "regiao": { "id": 3, "nome": "Sudeste", "sigla": "SE" }, "sigla": "RJ" }
        const res = await request(ApiUrl).get('estados/33');
        expect(res.body).toStrictEqual(mockState)
    })



    it('should return state accornding the id passed', async () => {
        const res = await request(ApiUrl).get('distritos?orderBy=nome');
        expect(res.body).toEqual(expect.arrayContaining([expect.objectContaining({ "nome": "Rio de Janeiro" })]))
    })

    it('should return error status when state accornding the id passed', async () => {
        const mockState = { "id": 33, "nome": "Rio de Janeiro", "regiao": { "id": 3, "nome": "Sudeste", "sigla": "SE" }, "sigla": "RJ" }
        const res = await request(ApiUrl).get('estado');
        expect(res.status).toBe(404)
    })

    it('should return state accornding the id passed', async () => {
        const res = await request(ApiUrl).get('estados/3-pp9no');
        expect(res.status).toBe(200)
    })

    it('should return empty array when state params passed was invalid', async () => {
        const res = await request(ApiUrl).get('/estados/OU/municipios');

        expect(res.body).toEqual([])
    });

    it('should return empty array when state params was not pass', async () => {
        const res = await request(ApiUrl).get('/estados//municipios');

        expect(res.body).toEqual([])
    });

})

describe("GET /regioes-imediatas/330002|330005/distritos", () => {

    it("should force error 500 (Internal Server Error) when trying to find cities around Angra and Resende", async () => {
        const response = await request(ApiUrl).get("regioes-imediatas/330002|");
        expect(response.status).toBe(500);
        expect(response.body).toEqual({
            message: "Internal server error",
            statusCode: 500,
        });
    })
})


