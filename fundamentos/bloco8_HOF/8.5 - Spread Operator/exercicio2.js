// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest .

const sum = (...args) => args.reduce((acc, elem) => acc += elem, 0);

// const numbers = [0, 1, 2, 4];

console.log(sum(1, 2, 3));