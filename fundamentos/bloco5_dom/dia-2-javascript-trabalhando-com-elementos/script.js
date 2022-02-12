let textoH1 = "Exercício 5.2 - JavaScript DOM";

let tagBody = document.querySelector('body');

let creatH1 = document.createElement('h1');
creatH1.className = "creat-h1";
creatH1.innerText = textoH1;

tagBody.appendChild(creatH1);
