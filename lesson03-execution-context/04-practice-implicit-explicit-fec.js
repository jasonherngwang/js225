// 1
function foo() {
  return this;
}

let context = foo(); // Implicit FEC is `window`
console.log(context); // Window { ... }

// 2
// In strict mode, implicit FEC is `undefined`.

// 3
let obj = {
  foo() {
    return this;
  },
};

// implicit FEC is the calling object `obj`
let context2 = obj.foo(); // non-arrow function called as method

console.log(context2); // object obj: {foo: ƒ}

// 4
var message = 'Hello from the global scope!'; // global var, property of global object

function deliverMessage() {
  console.log(this.message);
}

// Function call. implicit FEC is `window`. Accesses `window.message`.
deliverMessage(); // logs 'Hello from the global scope!'

// Global var, but NOT property of `window`
let bar = {
  message: 'Hello from the function scope!',
};

bar.deliverMessage = deliverMessage;

// Method call. Implicit FEC is object `bar`. Accesses bar.message
bar.deliverMessage(); // logs 'Hello from the function scope!'

// 5
var a = 10; // global var, property of global object
let b = 10; // global var, NOT property of global object
// global var, NOT property of global object
let c = {
  a: -10,
  b: -10,
};

function add() {
  // Accesses `b` from lexical scope.
  // `this.a` depends on FEC.
  return this.a + b;
}

c.add = add;

// Function call. Implicit FEC is `window`.
// this.a is window.a which is 10, b is 10. Logs 20.
// If line 1 was `let a`, `window.a` doesn't exist, so `undefined + 10` = NaN
console.log(add());

// Method call. Explicit FEC is object `c`.
// c.a is -10, b is not a local variable of `add`; searches lexical scope and
// finds it as a global var, with value of 10. Logs 0.
console.log(c.add());

// 7
let foo2 = {
  a: 1,
  b: 2,
};

let bar2 = {
  a: 'abc',
  b: 'def',
  add() {
    return this.a + this.b;
  },
};

// Retrieves a = 1 and b = 2 from explicit context `foo2`
// Logs 3
console.log(bar2.add.call(foo2));

// 8
let fruitsObj = {
  list: ['Apple', 'Banana', 'Grapefruit', 'Pineapple', 'Orange'],
  title: 'A Collection of Fruit',
};

function outputList() {
  console.log(this.title + ':');

  // console.log(arguments);
  // Using call
  // [Arguments] {
  //   '0': [ 'Apple', 'Banana', 'Grapefruit', 'Pineapple', 'Orange' ]
  // }

  // Using apply
  // [Arguments] {
  //   '0': 'Apple',
  //   '1': 'Banana',
  //   '2': 'Grapefruit',
  //   '3': 'Pineapple',
  //   '4': 'Orange'
  // }

  let args = [].slice.call(arguments);

  args.forEach(function (elem) {
    console.log(elem);
  });
}

// invoke outputList here
outputList.call(fruitsObj, ...fruitsObj.list);
outputList.apply(fruitsObj, fruitsObj.list);

// 9
// arguments is an Array-like object that lacks standard Array functions such
// as slice and forEach. Therefore we convert it to an Array first.
