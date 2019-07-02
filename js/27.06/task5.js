function fromPairs(arr) {
  return arr.reduce(function(accumulator, currentValue) {
    const [key, value] = currentValue;
    return {
      ...accumulator,
      [key]: value
    };
  }, {});
}

// Expected result

// fromPairs([['a', 1], ['b', 2]]); // => { 'a': 1, 'b': 2 }
