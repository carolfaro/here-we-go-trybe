// array some e every
// para fixar:


//1.Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false , use some ;

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((element) => element === name);

console.log(hasName(names, 'Ana'))

//2.  Escreva uma função que dado um array de pessoas e 
// uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false , use every ;

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];

  // retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false , use every ;
  
  const verifyAges = (arr, minimumAge) => {
    return arr.every((pessoa) => pessoa.age >= minimumAge);
    }
  
  console.log(verifyAges(people, 18));



  // SORT
  // SINTAXE: arr.sort();
  // ordem crescente numérica: arr.sort((a, b) => a - b);

  // para fixar
  // 1.  Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente .
  
  const people1 = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// ordernar o array
people1.sort((pessoaA, pessoaB) => pessoaB.age - pessoaA.age);

// Adicione se código aqui

console.log(people1);

