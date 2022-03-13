
  const creatRegister = (fullName) => {
      const email = fullName.toLowerCase().split(' ').join('_');
      return { fullName, email: `${email}@carolfaro.com`};
  };

  const newEmployees = (callback) => {
    const employees = {
      id1: callback('Giovanna Faro'),
      id2: callback('Vinicius Negri'), 
      id3: callback('Andrea Faro'),
    }
    return employees;
  };

  console.log(newEmployees(creatRegister));