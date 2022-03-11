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

// 

  function aprovado () {
    estudantes.forEach((estudante) => {
    if (estudante.status >= 80 && estudante.status < 100){
    estudante.status = 100;
    } else if (estudante.status < 80){
    estudante.status = 80;
    }
    console.log(`Olá ${estudante.nome}, parabéns por ter conseguido ${estudante.status}% no projeto ${estudante.projeto}`);
    })
    }
    aprovado(); 

    // função construtora de objetos:
    // sem classe

   const livro = function(nome, editora, paginas) {
     gnome = nome,
     geditora = editora,
     gpaginas = paginas,

      this.getNome = function() {
        return gnome;
      }
      this.getEditora = function() {
        return geditora;
      }
      this.getPaginas = function() {
        return gpaginas;
      }  
   }

   const livro1 = new livro('cem anos de solidão', 'cia das letras', 400);
   console.log(livro1.getNome());
   
   // com classe

   class livroB {
    constructor(name, author, price) {
      this.name = name,
      this.author = author,
      this.price = price
    }
    sayTitle() {
      console.log(`Título: ${this.name}`)
    }
    textBook() {
      console.log(`${this.name} é um livro do autor ${this.author} e está à venda por ${this.price}`)
    }
   };

   const livro2 = new livroB('O retrato de Dorian Gray', 'Oscar Wilde', 50)
   livro2.sayTitle()
   livro2.textBook()