function rememberResult(initialValue) {
  let currentValue = initialValue;

  return func => (currentValue = func(currentValue));
}

// Expected result

function doubleValue(value) {
  return 2 * value;
}

const callWithRememberedResult = rememberResult(2);

// callWithRememberedResult(doubleValue); // => 4
// callWithRememberedResult(doubleValue); // => 8
// callWithRememberedResult(doubleValue); // => 16
