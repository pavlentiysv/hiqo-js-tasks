function getSumAdvanced() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    if (+arguments[i]) {
      sum += +arguments[i];
    } else if (typeof arguments[i] == 'function') {
      sum += +arguments[i]();
    }
  }
  alert(sum);
  return 0;
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
