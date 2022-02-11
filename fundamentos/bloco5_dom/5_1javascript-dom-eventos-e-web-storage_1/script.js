function mudaTextoTag (texto) {
    let mudaTexto = document.getElementsByTagName("p")[0].innerText= texto;
    return mudaTexto
}


console.log(mudaTextoTag("carol linda"));