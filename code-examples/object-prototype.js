// Object.getPrototypeOf(obj)
// Object.setPrototypeOf(obj, prototypeObj)

let arr = [1, 2, 3];
let obj = {};

console.log(Object.getPrototypeOf(arr)); // Object(0) []
console.log(Object.getPrototypeOf(arr) === Array.prototype); // true

Object.setPrototypeOf(arr, obj);
console.log(Object.getPrototypeOf(arr)); // {}
console.log(Object.getPrototypeOf(arr) === obj); // true
console.log(arr.__proto__ === obj); // true
