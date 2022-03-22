  // aula ao vivo 8.4
  // array.reduce((acumulador, item) => {função}, valor início do acumulador)
  // abaixo junta o array

  const nometodo = ['c', 'a', 'r', 'o', 'l']
  const arruma = nometodo.reduce((acumulador, letra) => `${acumulador} ${letra}`);
  console.log(arruma)
  console.log(typeof arruma)

// abaixo cria novo obj com a chave sendo o valor da primeira chave do array original, e o valor com o valor da segunda chave.

  const women = [{ nome: 'caroline faro', email: 'carol@llaa' }, { nome: 'vinicius negri', email: 'vini@lala'}];

  const novoObjt = women.reduce((acumulador, item) => {
      acumulador[item.nome] = item.email;
      return acumulador;
  }, {})

  console.log(novoObjt);

  // para criar uma chave dinâmica no objeto é com colchetes, como acima.

  //soma pares => exercício do dia 
  
  const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

  const somaPares = numbers.reduce((acumulador, item) => 
    (item % 2 === 0) ? acumulador + item : acumulador
  );

  console.log(somaPares);

  