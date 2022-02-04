/*
exercicio 4

const a = 8;
const b = 2;
const c = 9;

let resto = a % 2



if (a >= 0) {
    console.log("positivo");
} else {
    console.log("negative")
};*/

/*
exercicio 5

const angulo1 = 100;
const angulo2 = 30;
const angulo3 = 50;
let angulo = 180;
let resultado = angulo1 + angulo2 + angulo3;

if (resultado === angulo) {
    console.log(resultado == angulo)
} else {
    console.log(!resultado === angulo)
};
*/

/*
exercicio 6

let pecacerta = "bishop";
let pecanova = "dama";
let posicao = "diagonal";
let letraminusculapeca = pecanova.toLowerCase(pecanova);

if (letraminusculapeca === pecacerta) {
    console.log(posicao)
} else {
    console.log("error")
};
*/

/*
const numeroa = 20;
const numerob = 13;
const numeroc = 21;

if (numeroa % 2 === 0 || numerob % 2 === 0 || numeroc % 2 ===0) {
    console.log(numeroa % 2 === 0)
} else {
    console.log(!numeroa % 2 ===0)
}
*/

let valorProduto = 100
let valorImposto = valorProduto / 10 * 2;
let valorProdutoTotal = valorProduto + valorImposto;
let valorVenda = 150;

if (valorProdutoTotal > 0 && valorVenda > 0) {
    console.log((valorVenda - valorProdutoTotal) * 1000)
} else {
    console.log("valores menores que 0");
}


