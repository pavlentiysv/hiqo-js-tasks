function uniq(arr) {
  var arrResult = arr.filter(function(currentElement) {
    var countOfMatches = 0;
    for (i = 0; i < arr.length; i++) {
      if (currentElement === arr[i]) {
        countOfMatches++;
      }
    }
    return countOfMatches === 1;
  });
  console.log(arrResult);
  return arrResult;
}

// or we can just use double loop. logic is almost the same

// uniq([2, 1, 2, 5, 6, 5, 7]); // => [1, 6, 7]
