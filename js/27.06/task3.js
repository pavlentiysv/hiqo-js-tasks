function findIndex(objectForSearch, elementToFind) {
  const isFunction = typeof elementToFind === 'function';
  const searchMethod = isFunction ? 'findIndex' : 'indexOf';
  console.log(objectForSearch[searchMethod](elementToFind));
  return (objectForSearch[searchMethod](elementToFind));
}

// Expected result

const numbers = [3, 5, 1, 6, 7];

// findIndex(numbers, 1); // => 2

const users = [{ name: 'User1' }, { name: 'User2' }, { name: 'User3' }];

// findIndex(users, user => user.name === 'User2'); // => 1
