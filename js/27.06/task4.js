function flattenDeep(arr) {
  var arrayTrigger = 1;
  while (arrayTrigger > 0) {
    arrayTrigger = 0;
    for (var i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'object') {
        arrayTrigger += 1;
      }
    }
    arr = arr.flat();
  }
  console.log(arr);
  return arr;
}

// Expected result

// flattenDeep([1, [2, [3, [4]], 5]]); // => [1, 2, 3, 4, 5]
