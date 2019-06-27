function callWithFunctionResult(funct1, funct2) {  
  return console.log(funct1(funct2()));;
}

// Expected result callWithFunctionResult(doubleValue, getFour) => doubleValue was called with value returned by getFour, => 2 * 4 = 8

function doubleValue(value) {
  return value * 2;
}

function getFour() {
  return 4;
}
