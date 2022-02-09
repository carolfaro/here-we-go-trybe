

// for (let index = 0; index < numbers.length; index += 1) {
//     console.log(numbers[index])
// }


// for (let index = 0; index < numbers.length; index += 1) {
//  console.log(numbers[index] + numbers[index])
// }

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;

// for (let index = 0; index < numbers.length; index +=1) {
// soma = soma + numbers[index];
// }

// console.log(soma);

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;

// for (let index = 0; index < numbers.length; index +=1) {
// soma = soma + numbers[index];
// }

// console.log(soma / numbers.length);

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;
// let media = 0

// for (let index = 0; index < numbers.length; index +=1) {
// soma = soma + numbers[index];
// }

// media = (soma / numbers.length);

// if (media > 20) {
//     console.log("valor maior que 20")
// } else {
//     console.log("valor menor que 20")
// }

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] > soma) {
//         soma = numbers[index]
//     }
// }
// console.log(soma);


// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let resultado = [];
// let impares = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] % 2 !== 0) {
//         resultado.push(numbers[index]);
//     }
// }

// if (resultado.length > 0) {
//     impares = resultado.length;
// } else {
//     console.log("não tem")
// }

// console.log(impares);

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let numeroMaior = numbers[0];

// for (let index = 1; index < numbers.length; index += 1) {
//     if (numbers[index] > numeroMaior) {
//         numeroMaior = numbers[index];
//     }
// }
// console.log(numeroMaior);

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let numeroMenor = numbers[0];

// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] < numeroMenor) {
//         numeroMenor = numbers[index];
//     }
// }
// console.log(numeroMenor);

// let numeros12a25 = [];

// for (let cont = 1; cont <= 50; cont += 1) {
//     numeros12a25.push(cont);
// }


// let numeros12a25 = [];

// for (let cont = 1; cont <= 50; cont += 1) {
//     numeros12a25.push(cont);
// }

// console.log(numeros12a25);

// let numerospor2 = [];

// for(let index = 0; index < numeros12a25.length; index +=1) {
//     numerospor2.push(numeros12a25[index] / 2)
// }

// console.log(numerospor2);

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for(let index = 1; index < numbers.length; index +=1) {
//     for (let index2 = 0; index2 < index; index2 += 1) {
//         if (numbers[index] < numbers[index2]) {
//             let posicaoCrescente = numbers[index];
//             numbers[index] = numbers[index2];
//             numbers[index2] = posicaoCrescente;
//         }
//     }
// }

// console.log(numbers)

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let numbers2 =[];

// for(let index = 1; index < numbers.length; index +=1) {
//     for (let index2 = 0; index2 < index; index2 += 1) {
//         if (numbers[index] > numbers[index2]) {
//             let posicaoCrescente = numbers[index];
//             numbers[index] = numbers[index2];
//             numbers[index2] = posicaoCrescente;
//         }
//     }
// }

// for(let index = 1; index < numbers.length; index +=1) {
//     for (let index2 = 0; index2 < index; index2 += 1) {
//         if (numbers[index] > numbers[index2]) {
//             let multiplicacao = numbers[index] * numbers[index2];
//             multiplicacao = numbers[index2];
//             numbers[index2] = multiplicacao
//             numbers2.push(multiplicacao)
//         }
//     }
// }
// console.log(numbers2);

// let fatorial10 = 10;

// for (let index1 = 1; index1 <= 10; index1 += 1) {
// for (let index2 = 2; index2 <= 10; index2 += 1) {
//     fatorial10 = index1 * index2;
// }
// console.log(fatorial10)
// }


// let fatorial10 = 10;

// for (let index1 = 1; index1 <= 10; index1 += 1) {
// for (let index2 = 2; index2 <= 10; index2 += 1) {
//     fatorial10 = index1;
//     index1 = index1 * index2
// }
// console.log(fatorial10)
// }

// let fatorial = 1;
// for (let index = 10; index > 0; index += 1) {
//     fatorial *= index
// }
// console.log(fatorial)

// let word = "tryber";

// let inverte = word.split("").reverse().join("");

// console.log(inverte);

// abaixo exercício 2 consultado em :https://pt.stackoverflow.com/questions/5943/como-inverter-uma-string-em-javascript

// let word = "tryber";
// let inverte = word.split("").reverse().join("");


// console.log(inverte)

// let menorPalavra = array[0];

// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let maiorPalavra = array[0];
// let menorPalavra = array[0];


// for (let index = 0; index < array.length; index += 1) {
//     if (array[index].length > maiorPalavra.length) {
//         maiorPalavra = array[index];
//     }
// }

// for (let index = 0; index < array.length; index += 1) {
//     if (array[index].length < menorPalavra.length) {
//         menorPalavra = array[index];
//     }
// }
// console.log(menorPalavra);
// console.log(maiorPalavra);

let arrayPrimos = [];
// let menorPrimo = 1;
// let maiorPrimo = 1;

// for (let cont = 1; cont <= 50; cont += 1) {
//     if (cont % 1 === cont && cont % cont === 0 {
//         arrayPrimos.push(cont);
//     }
// }
// console.log(arrayPrimos);

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

//   console.log("Bem vinda, " + info.personagem);

//   let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

//   info['recorrente'] = 'Sim';

//   for (let key in info) {
//       console.log(key)
//   }

//   let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

//   info['recorrente'] = 'Sim';

//   for (let key in info) {
//       console.log(info[key])
//   }

//   let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: 'Sim'
//   };

//   let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
//     nota: 'O último MacPatinhas',
//     recorrente: 'Sim'
//   };

//  for (let index in info) {
//   if (info[index] === info2[index]) {
//       console.log('igual')
//   } else {
//       console.log(info[index] + " e " + info2[index])
//   }
// }

// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//     ],
//   };

//   console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama " + leitor.livrosFavoritos[0].titulo);

  let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  leitor.livrosFavoritos.push(
      {

    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editor: 'Rocco',
      }
  )

  console.log(leitor);