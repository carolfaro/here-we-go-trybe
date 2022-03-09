// soma dos índices de um array

const somaA = (numeros1) => {
    let somaB = 0;
    for (let index = 0; index < numeros1.length; index += 1) {
        somaB += numeros1[index];
    }
    return somaB
};


// estrutura de um teste

describe('Descreve o que a função vai testar', (nomedafuncao)=> {
    it('qual teste a função vai realizar tipo: soma 2 + 2 e recebe 4 de retorno', () => {
        expect(nomedafuncao(2, 2)).toBe(4);
      });
    });

// compara tipo

if(typeof value !== 'number'){};

// TESTE PROJETO


const somaC = (numbers) => {
    let result = 0;
    let valor = numbers.lenght;
    for (let index = 0; index < numbers.length; index += 1) {
      if (typeof numbers[index] !== 'number' || valor === 0) {
        result = 'undefined';
      } else {
          result = 'deu certo'
      }
    }
    return result;
};
console.log(somaC([]));



const somaD = (numbers) => {
    let valor = numbers;
    if (valor.length === 0) {
        return 'consegui'
    } else {
        return 'de novo';
    }
};
console.log(somaD([1]));

// função com várias condicionais, uma antes da outra:

const average = (numbers) => {
    if (numbers.length === 0) {
      return undefined;
    }
    for (let num in numbers) {
      if (typeof numbers[num] !== 'number') {
        return undefined;
      }
    }
    const sum = numbers.reduce((a, b) => a + b, 0) / numbers.length;
    return Math.round(sum);
  };

  // uma condicional por vez.