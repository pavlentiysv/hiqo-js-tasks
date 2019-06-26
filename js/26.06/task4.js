function callWithFunctionResult(funct1, funct2) {
  alert(doubleValue(getFour()));
  return doubleValue(getFour());
}

// Expected result callWithFunctionResult(doubleValue, getFour) => doubleValue was called with value returned by getFour, => 2 * 4 = 8

function doubleValue(value) {
  return value * 2;
}

function getFour() {
  return 4;
}
