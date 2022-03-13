
 // exercico 1
 const creatRegister = (fullName) => {
      const email = fullName.toLowerCase().split(' ').join('_');
      return { fullName, email: `${email}@carolfaro.com`};
  };

  // a constante creatRegister recebe de parametro fullname, que deve ser o nome completo do funcionário,
  // dentro dela tem uma constante que converte o nome em email
  // ela retorna um objeto com o nome completo e o email gerado

  const newEmployees = (callback) => {
    const employees = {
      id1: callback('Giovanna Faro'),
      id2: callback('Vinicius Negri'), 
      id3: callback('Andrea Faro'),
    }
    return employees;
  };

  // a constante newemployes recebe callback de parâmetro, dentro dela tem uma constante chamanda employees,
  // essa constante employess é um objeto com 3 ids, o primeiro id1 executa a callback com um parâmetro 'giovanna faro'
  // o segundo id executa a funçao callback com o paramentro vinicius negri
  // o terceiro id executa a função callback com o parametro andrea faro, ou seja, a constante executa 3x o callback com parâmetros.
  // por fim ela retorna a cosntante employess atualizada preenchendo as chaves do obj



  console.log(newEmployees(creatRegister));

// para executar chamamos newemployes executando creatregister


  //2. Desenvolva uma HOF que retorna o resultado de um sorteio. 
  //Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado 
  //e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve
  // ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

 // exercico 2
const numberCheker = (myNumber, numberBet) => myNumber === numberBet;

// constante acima faz a checagem entre o numero apostado e numero q saiu no sorteio, checando se é true;

const raffleResult = (myNumber, callback) => {
    const numberBet = Math.floor((Math.random() * 5) + 1);

    return callback(myNumber, numberBet) ? "parabéns" : 'looser';
};

// constante acima tem de parametro o numero apostado e callback que vai chamar a checagem.
// uma constante dentro dela chamada numberbet, que é parametro da funcao de checagem, nessa constante é gerado o número aleatório
// a funcao retorna callback executando uma função, a checagem, esse callback executa a função de checagem.
//com parametros meu numero apostado e o numero gerado, se true parabens, se false looser.

console.log(raffleResult(3, numberCheker));

// executa a funcao do resultado com parametros meu numero e a funcao de callback