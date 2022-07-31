function func() {}
console.log(Object.getOwnPropertyNames(func));
// [ 'length', 'name', 'arguments', 'caller', 'prototype' ]

// Creating function object `func` also creates object `func.prototype`.
console.log(Object.getOwnPropertyNames(func.prototype));
// [ 'constructor' ]
console.log(func.prototype.constructor === func);
// true
