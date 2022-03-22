//SINTAXE: 

// FOR EACH
//array.forEach(function(currentValue, index, arr), thisValue)

// FIND
// arr.find(callback(element[, index[, array]])[, thisArg])

//FUNCTION => uma função para cada elemento da matriz
//CURRENTVALUE => o valor do elemento atual
//INDEX => índice do elemento atual
//ARR => a matriz do elemento atual => O PRÓPRIO ARRAY INTEIRO

// OBS: o foreach é uma função que tem que ser executada
//  básico foreach

const arrayAleatorio = ['floki', 'helga', 3, {comida: 'pizza'}];

arrayAleatorio.forEach((element) => {
    console.log(element);
})

// ex 2

let listaEmail = ['carol@gmail.com', 'vinicius@gmail.com', 'giovanna@gmail.com'];

const enviarEmail = (email) => console.log(`email para: ${email}`);

listaEmail.forEach((item) => {
    enviarEmail(item);
});

// ex 3

const estudantes = [
    { name: 'Maria', grade: 70, approved: '' },
    { name: 'José', grade: 56, approved: '' },
    { name: 'Roberto', grade: 90, approved: '' },
    { name: 'Ana', grade: 81, approved: '' },
  ];

 // mudar status de aprovado para alunos acima de 81
function mudarStatus() {
    estudantes.forEach((element, index) => {
        if (element.grade >= 60) {
            estudantes[index].approved = 'sim';
        } else {
            estudantes[index].approved = 'não';
        }
    });
}

mudarStatus();

// ex 4 FIND
// Queremos encontrar e imprimir no console o primeiro elemento de um array que satisfaça a uma determinada condição. 
// Pode ser, por exemplo, encontrar o primeiro número que seja divisível por 5 em uma lista de números.
//FIND
// Sintaxe: arr.find(callback(element[, index[, array]])[, thisArg])

const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];

const achar = numbers.find(element => element % 2 === 0);

console.log(achar);

// ex 5

const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((element, indexOfTheArray, theEntireArray) => {
  console.log('Cada elemento do array:', element);
  console.log('Index, posição do elemento:', indexOfTheArray);
  console.log('Array percorrido:', theEntireArray);
});

// ex 6

const numbers2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// funcão que multiplica por 2
const multiplicaPorDois = (element) => {
    console.log(element * 2)
}

// agora passa no foreach

numbers2.forEach(multiplicaPorDois);

// ex 7
// Use o método forEach chamando a callback showEmailList para apresentar os emails
const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  };
  
emailListInData.forEach(showEmailList);

// ex 8 FIND
// Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista:

const numbers3 = [19, 21, 30, 3, 45, 22, 15];

// função para retornar o primeiro número do array divisivel por 3 e 5
const divisivelpor3e5 = (element) => {
    if (element % 3 === 0 && element % 5 === 0) {
        return element
    }
};

const vamosVer = numbers3.find(divisivelpor3e5);

console.log(vamosVer);

// ex 9 FIND
// Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

const names = ['João', 'Irene', 'Fernando', 'Maria'];

// função para encontrar o primeiro nome com cinco letras
const encontraNome = (element, index) => {
   if (element.length === 5) {
       return element
   }
};

const encontraNomeC = names.find(encontraNome);
console.log(encontraNomeC)

// ex 10 FIND
// Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista:

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
  // Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista:
  function findMusic(id) {
    return musicas.find((element) => element.id === id);
}
  
  console.log(findMusic('31031685'))


//SOME 
// EXEMPLO 1
// testa se ao menos um dos elementos no array passa no teste implementado pela função atribuída e retorna um valor true ou false.
// AO MENOS UM

[2, 5, 8, 1, 4].some(elem => elem > 10);  // false
[12, 5, 8, 1, 4].some(elem => elem > 10); // true

// EXEMPLO 2
// usa o some para verificar se possui algum nome que começa com a letra desejada:
const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

// funcao para verificar começo do nome
// verifica se essa condição é verdadeira
const verificaLetra = (letra, nomes) => nomes.some((element) => element[0] === letra);

console.log(verificaLetra('J', listNames));

//OBS abaixo element[0] pega a primeira letra de cada elemento
const verificaSome = listNames.some((element) => console.log(element[0]));



// EVERY

//EXEMPLO 1
// testa se todos os elementos do array passam pelo teste implementado pela função fornecida.
// TESTA SE TODOS TEM A MESMA CONDIÇÃO

[12, 5, 8, 130, 44].every(elem => elem >= 10); // false
[12, 54, 18, 130, 44].every(elem => elem >= 10); // true

// EXEMPLO 2
// O exemplo abaixo usará o every para verificar se o estudante passou em todas as matérias:
const grades = {
    portugues: 'Aprovado',
    matematica: 'Reprovado',
    ingles: 'Aprovado',
  };

const passou = (notas) => (
    Object.values(notas).every((materias) => materias === 'Aprovado')
);

console.log(passou(grades))
