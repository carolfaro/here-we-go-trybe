// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

function badjokes(data) {
    const h2 = document.getElementById('jokeContainer');
    h2.innerHTML = data.joke;
}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => badjokes(data));
};

window.onload = () => fetchJoke();