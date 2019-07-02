function fromPairs(arr) {
  return arr.reduce(function(accumulator, currentValue) {
    const [key, value] = currentValue;
    return {
      ...accumulator,
      [key]: value
    };
  }, {});
}

//Previous solution

/*
function fromPairs(arr) {

  var objectResult = {};
  for (var i = 0; i < arr.length; i++) {
    objectResult[arr[i][0]] = arr[i][1];
  }
  console.log(objectResult);
  return objectResult;
}    
*/

// Expected result

// fromPairs([['a', 1], ['b', 2]]); // => { 'a': 1, 'b': 2 }
