// soma dos índices de um array

const somaA = (numeros1) => {
    let somaB = 0;
    for (let index = 0; index < numeros1.length; index += 1) {
        somaB += numeros1[index];
    }
    return somaB
};