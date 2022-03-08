// PARTE 1
// 1. 

// function testingScope(escopo) {
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);


//   const testingScope = (escopo) => {
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//       console.log(ifScope);
//     } else {
//       var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(`${ifScope} ' o que estou fazendo aqui ? :O'`);
// }

//   testingScope(true);

//   // 2.
//   const oddsAndEvens = [13, 3, 4, 10, 7, 2];

//   const sortNumbers = () => {
//     oddsAndEvens[0] = 2;
//     oddsAndEvens[1] = 3;
//     oddsAndEvens[2] = 4;
//     oddsAndEvens[3] = 7;
//     oddsAndEvens[4] = 10;
//     oddsAndEvens[5] = 13;

//     return oddsAndEvens;
    
//   }
 
//   const ordenados = sortNumbers();

//  console.log(`os números ficaram assim ${ordenados}`);

//  // PARTE 2
//  // 1.

//  const fatorial = (param1) => {
//      let resultado = 1;
//      for (let index = 2; index <= param1; index += 1) {
//      resultado *= index;
//      }
//      return resultado;
//  };

//  console.log(fatorial(5));

 //recursivo

//  const fatorial = param1 => param1 > 1 ? param1 * fatorial(param1 - 1) : 1;

//  console.log(fatorial(5));

 //2.

//  const maiorPalavra = palavra => {
//     let separaPalavra = palavra.split(' ');
//     if (separaPalavra[0] > separaPalavra[1]) {
//         console.log("e")
//     }
//      return separaPalavra
//  }

//  console.log(maiorPalavra("oi carol linda"));


const sum = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error('Os valores devem ser numéricos');
    }
    return value1 + value2;
  };
  
  console.log(sum(2, '3'));