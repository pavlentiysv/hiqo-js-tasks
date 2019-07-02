function difference(arr1, arr2) {
  const commonArr = arr1.concat(arr2);
  let bufObject = commonArr.reduce(function(accumulator, currentValue) {
    if (accumulator.hasOwnProperty(currentValue)) {
      accumulator[currentValue]++;
    } else {
      accumulator[currentValue] = 1;
    }
    return accumulator;
  }, {});

  return Object.keys(bufObject)
    .filter(currentValue => bufObject[currentValue] === 1)
    .map(value => Number(value));
}

// Expected result

// difference([2, 1], [2, 3, 4]);
// => [1, 3, 4]
