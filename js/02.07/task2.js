function callMaxTimes(numberOfTimes, func) {
  let currentAmountOfTimes = 0;
  return function() {
    if (currentAmountOfTimes < numberOfTimes) {
      func();
      return currentAmountOfTimes++;
    }
  };
}

// Expected result

function consoleLog() {
  console.log('abc');
}

const callConsoleLog = callMaxTimes(3, consoleLog);

// callConsoleLog(); // => 'abc'
// callConsoleLog(); // => 'abc'
// callConsoleLog(); // => 'abc'
// callConsoleLog(); // => nothing happens
