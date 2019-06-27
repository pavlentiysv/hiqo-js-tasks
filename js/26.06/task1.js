function getSum() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    const arg = Number(arguments[i]);
    if (arg) {
      sum += arg;
    }
  }
  console.log(sum); // For html page with buttons that run tasks.
  return 0;
}
