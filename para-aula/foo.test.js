jest.mock("./foo")

const foo = require("./foo")

it('foo', () => {
    foo.mockImplementation(() => 42); // aqui mocamos o valor da função para 42, simulando o comportamento esperado
    expect(foo()).toBe(42)
})