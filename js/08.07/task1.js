function createObject(obj) {
  for (key in obj) {
    if (obj.hasOwnProperty(key) && typeof obj[key] === 'function')
    obj[key] = obj[key].bind(obj);
  }
	return obj;
}

// Expected result

const obj1 = {
	testField: 1,
	getTestField: function() {
		return this.testField;
	}
};

const getTestField1 = obj1.getTestField;

// getTestField1() // => undefined, context was lost

const obj2 = createObject({
	testField: 1,
	getTestField: function() {
		return this.testField;
	}
});

const getTestField2 = obj2.getTestField;

// getTestField2() // => 1, context was binded by createObject function
