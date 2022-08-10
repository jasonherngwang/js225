// 1
let prot = {};
let foo = Object.create(prot);

// 2
console.log(Object.getPrototypeOf(foo) === prot); // true

// 3
console.log(prot.isPrototypeOf(foo)); // true

// 4
console.log(Object.prototype.isPrototypeOf(foo)); // true
