function every(arrOfObj, func) {
  var result = arrOfObj.every(func);
  console.log(result);
  return result;
}

// Expected result

const users71 = [
  { name: 'User1', age: 22 },
  { name: 'User2', age: 22 },
  { name: 'User3', age: 23 }
];

// every(users71, (user) => user.age === 22); // => false

const users72 = [
  { name: 'User1', age: 22 },
  { name: 'User2', age: 22 },
  { name: 'User3', age: 22 }
];

// every(users72, (user) => user.age === 22); // => true

const users73 = [
  { name: 'User1', age: 22 },
  { name: 'User2', age: 23 },
  { name: 'User3', age: 20 }
];

// every(users73, (user) => user.age < 24); // => true
