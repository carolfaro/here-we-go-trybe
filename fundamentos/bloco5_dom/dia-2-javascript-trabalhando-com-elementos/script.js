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

let creatP = document.createElement('p');

creatSection.appendChild(creatP);

let creatSection2 = document.createElement('section');
creatSection2.className = 'left-content';

creatMain.appendChild(creatSection2);

let creatSection3 = document.createElement('section');
creatSection3.className = 'right-content';

creatMain.appendChild(creatSection3);