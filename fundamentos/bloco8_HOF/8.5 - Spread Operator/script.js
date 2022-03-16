const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
  };

  const { name } = product;
console.log(name); // Smart TV Crystal UHD


// definindo o objeto
const character = {
  name2: 'Luke SkyWalker',
  age: '53',
  description: {
    specieName: 'Human',
    jedi: true,
  },
  homeWorld: {
    name: 'Tatooine',
    population: '200000',
  },
};

// desestruturando o objeto:
const { name2, age, homeWorld: { name: planetName }, description: { jedi } } = character;

// imprimindo os valores:
console.log(planetName)