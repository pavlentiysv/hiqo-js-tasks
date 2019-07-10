function memoize(fn) {
  const memoCache = {};
  return (...args) => {
    let key = JSON.stringify(args);
    if (!memoCache[fn]) {
      memoCache[fn] = {};
    }
    if (!memoCache[fn][key]) {
      memoCache[fn][key] = fn(...args);
      console.log('computing'); // just to make sure memoization works
    }
    console.log(memoCache);
    return memoCache[fn][key];
  };
}

// Expected result

function summ(a, b, c) {
  return a + b + c;
}

const memoizedSumm = memoize(summ);
// memoizedSumm(1, 2, 3); // => function summ was called, result 6
// memoizedSumm(1, 2, 3); // => function summ was NOT called, result 6 was remembered for arguments 1, 2, 3 and returned
// memoizedSumm(4, 2, 3); // => function summ was called, result 9
// memoizedSumm(4, 2, 3); // => function summ was NOT called, result 9 was remembered for arguments 4, 2, 3 and returned
