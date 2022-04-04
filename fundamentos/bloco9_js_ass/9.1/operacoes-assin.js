//*******Exemplo 1*******//
setTimeout(() => {
    console.log('Comprar parafusos') // Comprar parafusos
    console.log('Adicionar ao estoque') // Adicionar ao estoque
  }, 2000); // tempo antes de ser executado
  
  console.log('1 - Receber roda'); // 1 - Receber roda
  console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
  console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro

//*******Exemplo 1*******//***Parte 1***//
const pushNumber = (list, number) => list.push(number);

let numbers = [];

pushNumber(numbers, 1);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

console.log(numbers);

//*******Exemplo 1*******//***Parte 2***//
const pushNumber2 = (list, number) => list.push(number);

let numbers2 = [];

setTimeout(() => pushNumber2(numbers2, 1), 3000);
pushNumber2(numbers2, 2);
pushNumber2(numbers2, 3);

console.log(numbers2); // O retorno é [2, 3] porque o console log executa no console antes da execução do timeout

//*******Exemplo 1*******//***Parte 3***//
// Para que o console.log mostre o array correto, é necessário chamá-lo após 3000 milissegundos:
const pushNumber3 = (list, number) => list.push(number);

let numbers3 = [];

setTimeout(() => pushNumber3(numbers3, 1), 3000);
pushNumber3(numbers3, 2);
pushNumber3(numbers3, 3);

setTimeout(() => console.log(numbers3), 3000);
// o console logo tbm tem que entrar assíncrono pra pegar o código inteiro
