function mudaTextoTag (texto) {
    let mudaTexto = document.getElementsByTagName("p")[0].innerText= texto;
    return mudaTexto
}


console.log(mudaTextoTag("carol linda"));

function mudaCor (fundo) {
    let mudaAmarelo = document.getElementsByClassName("main-content")[0];
    mudaAmarelo.style.background = "rgb(76,164,109)";

}

console.log(mudaCor());

function mudaV (fundo2) {
    let mudaVermelho = document.getElementsByClassName("center-content")[0];
    mudaVermelho.style.background = "rgb(255, 255, 128)";

}

console.log(mudaV());

function corrigeH1 () {
    let corrige = document.getElementsByClassName("title")[0].innerText = "Exercício 5.1 - JavaScriplit"
}

corrigeH1();

function aumenta () {
    let aumentaLetra = document.getElementsByTagName("p")[0];
    aumentaLetra.innerHTML = aumentaLetra.innerHTML.toUpperCase();
}

aumenta();