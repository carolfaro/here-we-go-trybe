

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

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;
let menor = 0;

for (let index = 0; index < numbers.length; index += 1) {
if (numbers[index] > maior) {
maior = numbers[index]
}
if (maior > numbers[index]) {
menor = numbers[index]
}

}
console.log(maior);
console.log(menor);