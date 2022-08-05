// 1
// In non-strict mode, the implicit execution context is `window`.
// In strict mode, the implicit execution context is `undefined`.

// 2, 3
// "use strict";
a = 10;

console.log(window.a === a); // true in non-strict, ReferenceError in strict.
// a = 10 creates a property `a` on the global object `window`.

// 4
function func() {
  let b = 1;
}

func();

console.log(b); // ReferenceError.
// Variable declaration `let b` occurs inside the function scope of `func`, so
// `b` is function scoped. It is neither a global variable nor a property of the
// global object, and is therefore not accessible on the last line.

// 5, 6
function func() {
  b = 1; // Creates property on global variable (non-strict). ReferenceError in strict.
}

func();

console.log(b); // 1 in non-strict mode
