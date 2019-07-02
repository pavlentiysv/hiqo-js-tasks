function uniq(arr) {
  return arr.filter(function(currentValue, currentIndex) {
    return arr.indexOf(currentValue) === arr.lastIndexOf(currentValue);
  });
}

// uniq([2, 1, 2, 5, 6, 5, 7]); // => [1, 6, 7]
