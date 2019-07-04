function memoize(fn) {
  fn.memoCache = {};
  return (...args) => {
    let key = JSON.stringify(args);
    if (!fn.memoCache[key]) {
      fn.memoCache[key] = fn(...args);
      console.log('computing'); // just to make sure memoization works
    }
    return fn.memoCache[key];
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
