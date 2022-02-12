let textoH1 = "Exercício 5.2 - JavaScript DOM";

let tagBody = document.querySelector('body');

let creatH1 = document.createElement('h1');
creatH1.className = "creat-h1";
creatH1.innerText = textoH1;

tagBody.appendChild(creatH1);

let creatMain = document.createElement('main');
creatMain.className = 'main-content';

tagBody.appendChild(creatMain);

console.log(creatMain);

let creatSection = document.createElement('section');
creatSection.className = 'center-content';

creatMain.appendChild(creatSection);