function groupBy(arr, getKey) {
  return arr.reduce((accumulator, currentValue) => {
    const key = getKey(currentValue);
    return {
      ...accumulator,
      [key]: [...(accumulator[key] || []), currentValue]
    };
  }, {});
}

// Expected result

// groupBy(['one', 'two', 'three'], (element) => element.length); // => { '3': ['one', 'two'], '5': ['three']
