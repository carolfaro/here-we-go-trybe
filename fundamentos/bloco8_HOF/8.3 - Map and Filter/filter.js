// FILTER
// apenas pegar os elementos que não possuem alguma condição. 

// 1. Neste caso, deseja-se FILTRAR PESSOAS MENORES DE 18 ANO:
const objPeople = [
    { name: 'José', age: 21 },
    { name: 'Lucas', age: 19 },
    { name: 'Maria', age: 16 },
    { name: 'Gilberto', age: 18 },
    { name: 'Vitor', age: 15 },
  ];
  

  // pessoas que não possuem idade para dirigir
  // element.age

  // DIRETO NA CONSTANTE
  const menor = objPeople.filter((element) => element.age >= 18)

  // FUNÇÃO DINÂMICA
  const menorQualquer = (arr) => arr.filter((element) => element.age < 18)

  console.log(menorQualquer(objPeople));

  // 2. É preciso remover o Ricardo do objeto agora, já que ele não é mais um estudante.

  const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

  // REMOVER DIRETO => se fosse === seria, se você achar coloca na constante somente ricardo, com !== tira o ricardo.
  const removeRicardo = arrayMyStudents.filter((element) => element !== 'Ricardo')

  // MAIS GENÉRICA
  const funçãoRemove = (name, arr) => arr.filter((element) => element !== name)

  console.log(funçãoRemove('Ricardo', arrayMyStudents))
  console.log(removeRicardo)

