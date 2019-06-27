function getSumAdvanced() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    const arg = arguments[i];
    const isFunction = typeof arg === 'function';
    const argValue = isFunction ? arg() : arg;
    const argNumberValue = Number(argValue);

    if (argNumberValue) {
      sum += argNumberValue;
    }
  }
  return console.log(sum);
}

function getRandomNumber() {
  return Math.random();
}

function getTen() {
  return 10;
}

function getTenString() {
  return '10';
}




