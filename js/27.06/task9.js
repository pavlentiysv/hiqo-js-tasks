function groupBy(arr, key) {
  var result = arr.reduce(function(accumulator, currentValue){
    (accumulator[key(currentValue)] = accumulator[key(currentValue)] || []).push(currentValue);
    return accumulator;
  }, {});
  console.log(result);
  return result;
}

// Expected result

// groupBy(['one', 'two', 'three'], (element) => element.length); // => { '3': ['one', 'two'], '5': ['three'] 