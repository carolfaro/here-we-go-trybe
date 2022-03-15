// SPREAD

const numbers = [1, 2, 3];

const newArray = [...numbers, 4, 5, 6];
console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ]
console.log(numbers); // [ 1, 2, 3 ]

// EX 2

const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo)); // 20.76

// EX 3
// Para fixar e praticar, vamos fazer uma salada de frutas com itens adicionais que você desejar.
// Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens ,
// faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread .

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['kiwi', 'morango', 'abacaxi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['banana', 'maça', 'melão'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens))

// REST ARG

function quantosParams(...args) {
    console.log('parâmetros:', args);
    return `Você passou ${args.length} parâmetros para a função.`;
  }
  
//   console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
  console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.
 

  // EX 1
  const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); 

// a função const recebe ...args  e faz uma função reduce que soma os elementos.

// Object Destructuring
// ex 1
const product = {
    nome: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
  };

  const { nome } = product;
console.log(nome); // Smart TV Crystal UHD
// do lado esquerdo a CHAVE do direito o array. Pegou o VALOR da chave nome: do arr product.

// ex 2

// definindo o objeto
const character = {
    nome1: 'Luke SkyWalker',
    age: '53',
    description: {
      specieName: 'Human',
      jedi: true,
    },
    homeWorld: {
      nome2: 'Tatooine',
      population: '200000',
    },
  };

// Queremos extrair o nome do personagem, a idade, o nome do planeta e verificar se ele é um Jedi.
// Depois de feito, precisamos imprimir essas informações no console.log() , para isso, vamos utilizar a desestruturação de objetos:

const { nome1, age, homeWorld: { name: planet}, description: { jedi } } = character;

