// Closure of function returned from higher-order function
function func() {
  let a = 0; // Included in closure of returned function.

  return function () {
    // After reassignment, old value is eligible for GC.
    a += 1; // References `a` in lexical scope.
    console.log(a);
  };
}

// counter closes over private data `a`
// `a` is inaccessible from outside the function.
let counter = func();
counter(); // 1
counter(); // 2
counter(); // 3

// Closure of method in returned object
// Example of closures being created at function definition, and not changeable
// afterward.

function func2() {
  let b = 1;

  return {
    log() {
      console.log(b);
    },
  };
}

let obj = func2();
obj.log(); // 1

// Add method that tries to access `b` is the closure of `log`, but fails.
obj.log2 = function () {
  console.log(b);
};
obj.log2(); // ReferenceError: b is not defined
