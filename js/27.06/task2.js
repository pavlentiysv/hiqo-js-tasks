function difference(arr1, arr2) {
  var uniqArr1 = [...new Set(arr1)];
  var uniqArr2 = [...new Set(arr2)];

  for (i = 0; i < uniqArr1.length; i++) {
    if (uniqArr2.includes(uniqArr1[i])) {
      uniqArr1.splice(i, 1);
      uniqArr2.splice(i, 1);
    }
  }

  console.log(uniqArr1.concat(uniqArr2));
}

// Expected result

// difference([2, 1], [2, 3, 4]);
// => [1, 3, 4]
