function flattenDeep(arr) {
  return arr.reduce(function(accumulator, currentValue) {
    if (Array.isArray(currentValue)) {
      return accumulator.concat(flattenDeep(currentValue));
    } else {
      return accumulator.concat(currentValue);
    }
  }, []);
}

// Expected result

// flattenDeep([1, [2, [3, [4]], 5]]); // => [1, 2, 3, 4, 5]
