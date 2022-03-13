
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


  // 2. Desenvolva uma HOF que retorna o resultado de um sorteio. 
  // Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado 
  // e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve
  // ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

 // exercico 2
 // 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. 
 // Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e 
 // uma função que checa se o número apostado é igual ao número sorteado. 
 // O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
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


//3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), 
//o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante)
//e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. 
//Ao final a HOF deve retornar o total da contagem de respostas certas.
//Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.




const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['C', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const comparaAsRespostas = (respostasCertas, respostasAluno) => {
    if (respostasAluno === respostasCertas) {
        return 1;
    } if (respostasAluno === 'N.A') {
        return 0;
    }
    return -0.5;
};

const contadorPontos = (respostasCertas, respostasAluno, callback) => {
    let contador = 0;
    for (let i = 0; i < respostasCertas.length; i += 1) {
        const retornoComparacao = callback(respostasCertas[i], respostasAluno[i]);
        contador += retornoComparacao;
    }
    return `acertei deu ${contador}`;
};

console.log(contadorPontos(RIGHT_ANSWERS, STUDENT_ANSWERS, comparaAsRespostas));

// TENTA 2 DE NOVO


const checagemDosNumeros = (numeroApostado, numeroSorteado) => {
    if(numeroSorteado === numeroApostado) {
        return true
    }
};

const resultadoMegaSena = (numeroApostado, callback) => {
    const sorteiaNumero = Math.floor((Math.random() * 5) + 1);
    const respostaDaChecagem = callback(numeroApostado, sorteiaNumero);
    if(respostaDaChecagem === true) {
            return "parabéns"
        } 
        return "looser"
    };

console.log(resultadoMegaSena(3, checagemDosNumeros));