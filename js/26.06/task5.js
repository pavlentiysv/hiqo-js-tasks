function callWhileStringIsNotEmpty(string, func) {
  if (Boolean(string) !== false) {
    var value = string;
    func(value);
    value = value.slice(0, -1);
    callWhileStringIsNotEmpty(value, func);
  }
}

// Expected result

function consoleLog(value) {
  console.log(value);
}

// callWhileStringIsNotEmpty('qwerty', consoleLog);
/*
	Result:

	qwerty
	qwert
	qwer
	qwe
	qw
	q
*/
