

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

// let arrayPrimos = [];
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
//
//FOR IN INDEX
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

//   let leitor = {
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

//   leitor.livrosFavoritos.push(
//       {

//     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//     autor: 'JK Rowling',
//     editor: 'Rocco',
//       }
//   )

//   console.log(leitor);

//   console.log("Julia tem 2 livros favoritos: " + leitor.livrosFavoritos[0].titulo + leitor.livrosFavoritos[1].titulo);

//FUNÇÕES

// let word = "tryber";

// let inverte = word.split("").reverse().join("");

//PALÍNDROMO
// let palavra = "arara";
// let inverte = palavra.split("").reverse().join("");

// console.log(inverte);

// function palindromo (palavra) {
//     if (palavra === inverte) {
//         return true;

//     } else {
//         return false
//     }
// }

// console.log(palindromo ("arara"));
//
//
// for (let index in info) {
    //   if (info[index] === info2[index]) {
    //       console.log('igual')
    //   } else {
    //       console.log(info[index] + " e " + info2[index])
    //   }
    // }



// let inteiros = [2, 3, 6, 7, 10, 1];
// let resultado = [];


//   for (let index = 1; index < inteiros.length; index += 1) {
//       for (let index2 = 0; index2 < index; index += 1) {
//           if(inteiros[index] < inteiros[index2]) {
//               let position = inteiros[index];
//               inteiros[index] = inteiros[index2];
//               inteiros[index2] = position;
//               resultado.push(position);
//           }
//         }
//     }

// console.log(resultado);




// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < numbers.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (numbers[index] < numbers[secondIndex]) {
//       let position = numbers[index];
//       numbers[index] = numbers[secondIndex];
//       numbers[secondIndex] = position;
//     }
//   }
// }

// console.log(numbers);
 


// BUBBLE SORT !!!! BUBBLE SORT //

// let numerosTeste = [2, 3, 6, 7, 10, 1];

// for (let index = 1; index < numerosTeste.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (numerosTeste[index] < numerosTeste[secondIndex]) {
//         let position = numerosTeste[index];
//         numerosTeste[index] = numerosTeste[secondIndex];
//         numerosTeste[secondIndex] = position;
//       }
//     }
//   }
  
//   console.log(numerosTeste[numerosTeste.length-1]);
// OBS: numerosTeste foi atualizado em ordem de tamanho e numerosTeste[numerosTeste.length-1] mostra o maior índice desse array
//

// MAIOR VALOR //
// let numerosTeste = [2, 3, 6, 7, 11, 1];
// let maiorNumero = numerosTeste[0];
// let menorNumero = numerosTeste[0];


// function acharMaiorEmenor (numerosTeste) {
// for (let index = 0; index < numerosTeste.length; index += 1) {
//     if (numerosTeste[index] > maiorNumero) {
//         maiorNumero = numerosTeste[index];
//     }
// }

// for (let index = 0; index < numerosTeste.length; index += 1) {
//     if (numerosTeste[index] < menorNumero) {
//         menorNumero = numerosTeste[index];
//     }
// }
// console.log(maiorNumero[index]);
// console.log(menorNumero[index]);

// }

// console.log(acharMaiorEmenor(numerosTeste));

// let numeros = [2, 3, 6, 7, 10, 1];

// function indicaMaior (numeros) {
//   let indiceM = 0;
//   for (let index in numeros) {
//       if (numeros[indicaMaior] < numeros[index]) {
//           indiceM = index;
//       }
//   }
// return indiceM;
// }

// console.log(indicaMaior([2, 3, 6, 7, 10, 1]));

//FUNÇÃO SIMPLES CARRO-----------------------------------------

// var statusCarro = "desligado";
// var aceleracao = 0;
// var rotacaoVolante = 0;

// function ligarDesligar () {
// if (statusCarro === "desligado") {
//     statusCarro = "ligado";
// } else {
// statusCarro = "desligado";
// }
// return statusCarro
// }

// function acelerar (incremento) {
//     aceleracao = aceleracao + incremento;

//     return "acelrando a " + aceleracao + "!";

// }

// function frear (decremento) {
// aceleracao = aceleracao - decremento;

// return "desacelerando a " + aceleracao + "!";
// }

// function giraVolante (anguloRotacao) {
//     rotacaoVolante = anguloRotacao;

//     return rotacaoVolante + "!";
// }


// // console.log(ligarDesligar())

// // console.log(acelerar(30));

// // console.log(frear(10));

// // console.log(giraVolante(30));


// console.log(acelerar(30));
// console.log(aceleracao);


//QUAL É O MAIOR NUMERO// exercicio 2 //

// function qualEhOMaior (numeros) {
//     let indiceMaior = 0;
//     for (let index in numeros) {
//         if(numeros[indiceMaior] < numeros[index]) {
//             indiceMaior = index;
//         }
//     }
//     return indiceMaior;
// }

// console.log(qualEhOMaior([2, 3, 6, 7, 10, 1]));

// MENOR VALOR // exercício 3

// function qualEhOMenor (numeros) {
//     let indiceMenor = 0;
//     for (let index in numeros) {
//         if (numeros[indiceMenor] > numeros[index]) {
//             indiceMenor = index;
//         }
//     }
//     return indiceMenor
// }

// console.log(qualEhOMenor([2, 4, 6, 7, 10, 0, -3]));

// MAIOR QTDE DE CARACETERES // exercicio 4
// if (maiorN[0] < arrayNomes[value])

// function maiorNome (arrayNomes) {
//     let maiorN = [arrayNomes[0]];
//     for (let index in arrayNomes) {
//         if (maiorN.length < arrayNomes[index].length) {
//             maiorN = arrayNomes[index];
//         }
//     }
//     return maiorN
// }

// console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));


// function someN (numeroN) {
//     let numeroM = 0;
//     for (let index = 0; index <= numeroN; index += 1) {
//         numeroM = numeroM + index;
//     }
//     return numeroM
//     }

// console.log(someN(5));
