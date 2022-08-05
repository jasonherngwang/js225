// Run this in the browser (non-strict mode)

// Implicit function execution context
function foo() {
  return 'this here is: ' + this;
}
// No context specified; implicit context is global object `window`
console.log(foo()); // "this here is: [object Window]"

// Implicit method execution context
let myObject = {
  foo() {
    return 'this here is: ' + this;
  },
};

// Explicit caller `myObject`, so explicit context is object `myObject`.
console.log(myObject.foo()); // "this here is: [object Object]"

// Context loss: Removing method from object
// No context specified; implicit context is `window`
// It is NOT the parent object `myObject` because `myObject` is not used as
// an explicit caller during invocation.
let bar = myObject.foo;
console.log(bar()); // "this here is: [object Window]"
