function difference(arr1, arr2) {
  var buf1 = arr1.filter(function(currentValue) {
    var countOfMatches = 0;
    for (var i = 0; i < arr2.length; i++) {
      if (currentValue == arr2[i]) {
        countOfMatches++;
      }
    }
    return countOfMatches < 1;
  });
  var buf2 = arr2.filter(function(currentValue) {
    var countOfMatches = 0;
    for (var i = 0; i < arr1.length; i++) {
      if (currentValue == arr1[i]) {
        countOfMatches++;
      }
    }
    return countOfMatches < 1;
  });

  const arrResult = buf1.concat(buf2);
  console.log(buf1);
  console.log(buf2);
  console.log(arrResult);
}

// Expected result

// difference([2, 1], [2, 3, 4]);
// => [1, 3, 4]
