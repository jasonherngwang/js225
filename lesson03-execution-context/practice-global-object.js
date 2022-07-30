// 2, 3
// "use strict";
a = 10;

console.log(window.a === a); // true in loose mode, ReferenceError in strict mode
// a = 10 creates a property `a` on the global object `window`.

// 4
function func() {
  let b = 1;
}

func();

console.log(b); // ReferenceError. Outer scope can't access inner scope.

// 5, 6
function func() {
  b = 1; // Creates property on global variable (loose mode). ReferenceError in strict mode.
}

func();

console.log(b); // 1 in loose mode
