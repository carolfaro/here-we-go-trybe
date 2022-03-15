
// MAP ALTERA O ARRAY ORIGINAL
// 1. Suponha que é preciso transformar todos os números em negativos e passa-lós para um array novo.
const numbers = [1, 2, 3, 4, -5];

const negative = numbers.map((element) => (element < 0) ? element * (-1) : element)

console.log(negative);

// 2. COLOCANDO UMA CHAVE E ATRIBUINDO UM RESULTADO

const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

// const objFood = products.map((element) => {
//     return { food: element}
// });

const objCompleto = (listaProducts, listaPrices) => listaProducts.map((element, index) => {
    return { [element]: listaPrices[index] }
});

console.log(objCompleto(products, prices))

// ex. 3

const numerosCarol = [2, 4, 6, 8];

const dobraNumbero = (arr) => arr.map((element) => element * 2)

console.log(dobraNumbero(numerosCarol))


