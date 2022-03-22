const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  let result;
  let value;
  data.species.forEach((element) => {
    if (animal === element.name) {
      result = element.residents;
      result.every((elem) => {
        if (elem.age > age) {
          value = true;
        } else {
          value = false;
        }
        return value;
      });
    }
    return value;
  });
  return value;
}

// nome da especie => data.species.name
// idade => data.species.residentes[i][2]
// resul para armazenar residents
// value para armazenar resultado
// foreach para achar o nome igual ao passado de argumento, every para verificar se todos são maiores que a age

console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
