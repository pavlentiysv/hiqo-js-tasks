function callWhileStringIsNotEmpty(string, func) {
  if (Boolean(string) != false) {
    func(string);  
    string = string.slice(0, -1);
    callWhileStringIsNotEmpty(string, func);
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
