function uniq(arr) {
  var resArr = arr.filter(function(currentValue, currentIndex) {
    return arr.indexOf(currentValue) === arr.lastIndexOf(currentValue);
  });

  console.log(resArr);
  return resArr;
}

// uniq([2, 1, 2, 5, 6, 5, 7]); // => [1, 6, 7]
