function curry(fn) {
  return function f1() {
    if (arguments.length < fn.length) {
      return f1.bind(this, ...arguments);
    } else {
      return fn.call(this, ...arguments);
    }
  };
}

// Solution without .bind()
// function curry(fn) {
//   let arity = fn.length;

//   return function f1(...args) {
//     if (args.length >= arity) {
//       return fn(...args);
//     } else {
//       return function f2(...moreArgs) {
//         var newArgs = args.concat(moreArgs);
//         return f1(...newArgs);
//       };
//     }
//   };
// }

// Expected result

function summ1(a, b, c) {
  return a + b + c;
}

const curriedSumm1 = curry(summ1);

// curriedSumm1(1)(2)(3); // => 6

function summ2(a, b, c, d, e) {
  return a + b + c + d + e;
}

const curriedSumm2 = curry(summ2);

// curriedSumm2(1)(2)(3)(4)(5); // => 15
