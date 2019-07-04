function partial(func, greetWord) {
  return victim => func(greetWord, victim);
}

// Expected result

function greet(greeting, name) {
  return `${greeting} ${name}`;
}

const sayHelloTo = partial(greet, 'Greetings');

// sayHelloTo('everyone'); // => 'Hello everyone'
