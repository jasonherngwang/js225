// 2
// Function invocation.
// `this` references global object (loose), `undefined` (strict);

// 'use strict';

function whatIsMyContext() {
  return this;
}

whatIsMyContext();

// 3
// Function calls set EC to implicit global context.
function foo() {
  function bar() {
    function baz() {
      console.log(this); // `window`
    }

    baz();
  }

  bar();
}

foo();

// 4
// Method invocations set `this` to parent object, `obj`
let obj = {
  count: 2,
  method() {
    return this.count;
  },
};

console.log(obj.method()); // 2

// 5
// 'use strict';
function foo2() {
  console.log(this.a); // `undefined.a` (strict)
}

let a = 2;
foo2(); // undefined.a => TypeError

// 6
let a6 = 1;
function bar() {
  console.log(this.a6);
}

let obj6 = {
  a6: 2,
  foo: bar,
};

// Method invocation; `this` is `obj6`
// `bar` is called with `obj6` as EC.
// Within `bar`, `this.a6` references `obj6.a6` => 2
obj6.foo(); // 2

// 7
let foo7 = {
  a: 1,
  bar() {
    console.log(this.baz());
  },

  baz() {
    return this;
  },
};

// EC is `foo7`. Within `bar`, `this.baz()` is `foo7.baz()`.
// For method `baz`, `this` is `foo7` since `foo7` was the explicit receiver.
// Returns `foo7`.
foo7.bar();
let qux = foo7.bar; // Extract method from object
qux();
// Function invocation. EC is `window`.
// `this.baz()` is `window.baz()` => TypeError: this.baz is not a function
