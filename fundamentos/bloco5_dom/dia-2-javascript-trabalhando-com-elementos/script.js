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

let image = document.createElement('img');
image.className = 'small-image';
image.src = 'https://picsum.photos/200';
creatSection2.appendChild(image);

const listNumbers = ['um', 'quatro', 'dois', 'três', 'sete', 'nove', 'cinco', 'oito', 'seis', 'dez'];
let creatUl = document.createElement('ul');

for (let index = 0; index < listNumbers.length; index += 1){
    let listN = listNumbers[index];
    let creatLi = document.createElement('li');
    creatLi.innerText = listN;
    creatSection3.appendChild(creatLi);
}

for (let index = 1; index <= 3; index += 1) {
    let creatH3 = document.createElement('h3');
    creatH3.innerHTML =  index;
    creatMain.appendChild(creatH3);
}


