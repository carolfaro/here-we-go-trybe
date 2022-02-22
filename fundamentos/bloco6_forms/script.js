const btnSubmit = document.querySelector('#send');
const nameBox = document.querySelector('#input-name');
const emailBox = document.querySelector('#input-email');
const destiny = document.getElementsByName('destiny');
const textBox = document.querySelector('#text-area2');
const btnErase = document.querySelector('#review');

// console.log(textBox);

btnSubmit.addEventListener('click', e => {

    e.preventDefault();

})



btnErase.addEventListener('click', function(){
    document.location.reload(true);

})





// REFERÊNCIAS

// w3schools.com/jsref/event_preventdefault.asp#:~:text=The%20preventDefault()%20method%20cancels,link%20from%20following%20the%20URL

//recarregar a página sem pegar os dados:
//https://developer.mozilla.org/pt-BR/docs/Web/API/Location/reload