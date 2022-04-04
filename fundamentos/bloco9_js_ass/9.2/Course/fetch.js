const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  console.log(fetch(url));
}

fetchJoke();

// **** CORRIGINDO a msg:

const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  fetch(url) // executa a função na URL
    .then((response) => response.json()) // então a resposta de fetch é transformada em string
    .then((data) => console.log(data.value)); // entao o dado vai pro console.log transformado em valor
}

fetchJoke();

// *** E SE DER ERRO??
const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`Algo deu errado :( \n${error}`)); // SE DER ERRADO imprime o erro
}

fetchJoke();

// Algo deu errado :( 
// TypeError: Only absolute URLs are supported

// *** ASYNC E AWAIT *** //
const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));
}

fetchJoke();

// Chuck Norris can write multi-threaded applications with a single thread.

// *** agora com await

const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  const result = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.value)
    .catch((error) => `Algo deu errado :( \n${error}`);
  
  console.log(result);
};

fetchJoke();

// Chuck Norris can write multi-threaded applications with a single thread.