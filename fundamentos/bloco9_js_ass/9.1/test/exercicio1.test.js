    
const getPlanet = () => {
    const mars = {
      name: "Mars",
      distanceFromSun: {
        value: 227900000,
        measurementUnit: "kilometers",
      },
    };
    setTimeout(() => console.log("Returned planet: ", mars), 4000);
  };

  getPlanet(); // imprime Marte depois de 4 segundos 

// ****** SOLUÇÃO *****//
// settimeout apenas no consolelog //
//
// *** COMO FICOU => TEMPLATE *** //
// settimeout(() => );
//

// ***** TEMPLATE *** //
//   setTimeout(() => {}, TEMPOX);
//

