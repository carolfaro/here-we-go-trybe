const messageDelay = () => Math.floor(Math.random() * 5000); // função de tempo de delay

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature); // temperatura
};

// crie a função sendMarsTemperature abaixo// 
// *** SOLUÇÃO CAROL *** //
const sendMarsTemperature = () => {
    setTimeout(() => console.log(`Mars temperature is: ${getMarsTemperature()}`), messageDelay());
}

sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo

// *** SOLUÇÃO GABARITO *** //
// const sendMarsTemperature = () => {
//     const currentTemperature = getMarsTemperature(); // AQUI ARMAZENOU EM UMA CONSTANTE A EXECUÇÃO DA TEMPERATURA
//     setTimeout(() => console.log(`Mars temperature is: ${currentTemperature} degree Celsius`), messageDelay());
//   };
  