function isEqual(obj1, obj2) {
  const deepSort = object => {
    return Object.keys(object)
      .sort()
      .reduce((acc, key) => {
        return {
          ...acc,
          [key]:
            typeof object[key] === 'object'
              ? deepSort(object[key])
              : object[key]
        };
      }, {});
  };
  const obj1res = deepSort(obj1);
  const obj2res = deepSort(obj2);

  console.log(obj1res);
  console.log(obj2res);

  return JSON.stringify(obj1res) === JSON.stringify(obj2res);
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
  b: {
    c: 3,
    d: {
      e: 5
    }
  },
  a: 1
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
