

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

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbers2 =[];

for(let index = 1; index < numbers.length; index +=1) {
    for (let index2 = 0; index2 < index; index2 += 1) {
        if (numbers[index] > numbers[index2]) {
            let posicaoCrescente = numbers[index];
            numbers[index] = numbers[index2];
            numbers[index2] = posicaoCrescente;
        }
    }
}

for(let index = 1; index < numbers.length; index +=1) {
    for (let index2 = 0; index2 < index; index2 += 1) {
        if (numbers[index] > numbers[index2]) {
            let multiplicacao = numbers[index] * numbers[index2];
            multiplicacao = numbers[index2];
            numbers[index2] = multiplicacao
            numbers2.push(multiplicacao)
        }
    }
}
console.log(numbers2);