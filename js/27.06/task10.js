function isEqual(obj1, obj2) {
  var result = JSON.stringify(obj1) === JSON.stringify(obj2);
  console.log(result);
  return result;
}

// Expected result

const object1_1 = {
  a: 1,
  b: {
    c: 3,
    d: {
      e: 5
    }
  }
};
const object1_2 = {
  a: 1,
  b: {
    c: 3,
    d: {
      e: 5
    }
  }
};

// isEqual(object1_1, object1_2); // => true

const object2_1 = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 5
    }
  }
};
const object2_2 = {
  a: 1,
  b: {
    c: 3,
    d: {
      e: 5
    }
  }
};

// isEqual(object2_1, object2_2); // => false

const object3_1 = {
  a: 1,
  b: {
    c: 3,
    d: {
      e: 5
    }
  }
};
const object3_2 = {
  a: 1,
  b: {
    c: 3,
    d: {
      e: 6
    }
  }
};

// isEqual(object3_1, object3_2); // => false
