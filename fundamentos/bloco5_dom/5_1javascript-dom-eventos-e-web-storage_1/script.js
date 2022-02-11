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
    mudaVermelho.style.background = "#fefae0";

}

console.log(mudaV());