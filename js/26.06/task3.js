function isValueExists(value) {
  console.log(value != null);
  return value != null;
}

// Expected result

// isValueExists(1); // => true
// isValueExists(0); // => true
// isValueExists('12'); // => true
// isValueExists(''); // => true
// isValueExists(false); // => true
// isValueExists(undefined); // => false
// isValueExists(null); // => false
