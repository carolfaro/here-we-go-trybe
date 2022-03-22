// 1 - Dada uma matriz, transforme em um array.

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
    return arrays.reduce((acc, ele) => acc.concat(ele), [])
  };

  console.log(flatten())
  console.log(arrays)