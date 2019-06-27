function getSumAdvanced() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    const arg = Number(arguments[i]);
    if (arg) {
      sum += arg;
    } else if (typeof arguments[i] === 'function') {
      sum += +arguments[i]();
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
