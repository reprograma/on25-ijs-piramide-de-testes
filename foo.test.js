jest.mock('./foo')
const foo = require('./foo')

it('foo', () => {
    foo.mockImplementation(() => 42);
    expect(foo()).toBe(42)
})