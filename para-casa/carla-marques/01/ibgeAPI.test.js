// - Exercício 1 - API de localidades (IBGE): 
// Teste pelo menos 4 endpoints da [API de localidades do IBGE](https://servicodados.ibge.gov.br/api/docs/localidades), cobrindo caminhos felizes e infelizes. Exercite sua autonomia no aprendizado e fique a vontade para usar diferentes matchers do jest e acessar diferentes respostas com o supertest. 
const supertest = require('supertest');
const api = supertest('https://servicodados.ibge.gov.br/api/v1/localidades'); 
describe("Testes de API do IBGE", () => { 
    it("Retorna o nome do distrito, município e estado do ID 260620010", async () => {
        const distritoResponse = await api.get('/distritos/260620010');
        let distrito = distritoResponse.body[0];
        expect(distritoResponse.status).toBe(200);
        expect(distrito.nome).toBe("Ponta de Pedras");
        expect(distrito.municipio.nome).toBe("Goiana");
        expect(distrito.municipio.microrregiao.mesorregiao.UF.nome).toBe("Pernambuco");  
    }); 
   
    it("Retorna o nome do país e continente do ID 76", async () => {
        const paisResponse = await api.get('/paises/76');
        let pais = paisResponse.body[0];
        expect(paisResponse.status).toBe(200);
        expect(pais.nome).toBe("Brasil");
        expect(pais['regiao-intermediaria'].nome).toBe("América do sul");  
    }); 
    it("Verifica se os municípios estão contidos na região metropolitana de ID 03001", async () => {
        const municipiosResponse = await api.get('/regioes-metropolitanas/03001');
        let municipios = municipiosResponse.body[0].municipios;
        const array = municipios.map((element) => element.nome); 
        expect(municipiosResponse.status).toBe(200);
        expect(array).toEqual(expect.arrayContaining(["Olinda", "Paulista", "Recife"])); 
    }); 
    it("Retorna a quantidade de estados brasileiros", async () => {
        const estadosResponse = await api.get('/estados'); 
        let estados = estadosResponse.body;  
        expect(estadosResponse.status).toBe(200);
        expect(estados.length).toBe(27);  
    });
    it("Acessando endpoint que não existe", async () => { 
        const invalidoEP = await api.get('/estados/cidades/1');
        expect(invalidoEP.status).toBe(404); 
    });
    
});
