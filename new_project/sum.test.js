const sum = require('./sum');

test('Espera que o retorno de soma 4 e 5 retorne 9', () => {
    expect(sum(4, 5)).toBe(9);
});

test('Espera que o retorno de soma 0 e 0 retorne 0', () => {
    expect(sum(0, 0)).toBe(0);
});
