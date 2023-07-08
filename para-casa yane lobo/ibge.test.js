const request = require('supertest');
const api = 'https://servicodados.ibge.gov.br/api/v1/localidades';


describe('IBGE Locations API -> GET', () => {
    it('should return correctly the requested state name', async () => {
      const response = await request(api).get('/estados/33');
      expect(response.status).toBe(200);
      expect(response.body.nome).toBe('Rio de Janeiro');
    });

    it('should return correctly a list of all Brazilian states', async () => {
        const response = await request(api).get('/estados');
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
        
        const estados = response.body.map(obj => obj.nome);

        const todosEstados = [
            'Acre',
            'Alagoas',
            'Amapá',
            'Amazonas',
            'Bahia',
            'Ceará',
            'Distrito Federal',
            'Espírito Santo',
            'Goiás',
            'Maranhão',
            'Mato Grosso',
            'Mato Grosso do Sul',
            'Minas Gerais',
            'Pará',
            'Paraíba',
            'Paraná',
            'Pernambuco',
            'Piauí',
            'Rio de Janeiro',
            'Rio Grande do Norte',
            'Rio Grande do Sul',
            'Rondônia',
            'Roraima',
            'Santa Catarina',
            'São Paulo',
            'Sergipe',
            'Tocantins'
          ];

          expect(estados).toEqual(expect.arrayContaining(todosEstados));
      });

    it('should return correctly the total number of brazilian states', async () => {
        const response = await request(api).get('/estados');
        expect(response.status).toBe(200);
        const estados = response.body.map(obj => obj.nome);
        expect(estados).toHaveLength(27);

    });

    it('should return 200 when Japan is found', async () => {
      const response = await request(api).get('/paises/392');
      expect(response.status).toBe(200);
      expect(response.body.map(obj => obj.nome)).toContain("Japão");

  });
})

describe('IBGE Locations API - POST', () => {
  it('should try to send information and return 405', async () => {
    const region = {
      "id":6,"sigla":"HM","nome":"Hakuna Matata"
    }
    const response = await request(api).post('/regioes').send(region);
    expect(response.status).toBe(405, region);
  })
})