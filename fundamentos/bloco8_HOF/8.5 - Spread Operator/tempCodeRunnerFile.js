const character = {
    nome1: 'Luke SkyWalker',
    age: '53',
    description: {
      specieName: 'Human',
      jedi: true,
    },
    homeWorld: {
      nome2: 'Tatooine',
      population: '200000',
    },
  };

// Queremos extrair o nome do personagem, a idade, o nome do planeta e verificar se ele é um Jedi.
// Depois de feito, precisamos imprimir essas informações no console.log() , para isso, vamos utilizar a desestruturação de objetos:

const { nome1, age, homeWorld: { name: planet}, description: { jedi } } = character;
console.log(homeWorld);