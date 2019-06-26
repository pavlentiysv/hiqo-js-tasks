function getSum() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    if (+arguments[i]) {
      sum += +arguments[i];
    }
  }
  alert(sum); // For html page with buttons that run tasks.
  return 0;
}
