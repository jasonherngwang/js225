// 1
let foo = {};
let bar = Object.create(foo);

foo.a = 1;

console.log(bar.a); // 1 (will reflect the mutation of its prototype)

// 2
bar.a = 2;
console.log(bar.a); // 2 (local property is found first)

// 3
let boo = {};
boo.myProp = 1;

let far = Object.create(boo);

// lots of code

far.myProp; // 1
// Not guaranteed, we could have created a local property myProp, or
// set the prototype of `far` to another object.

// To check:
console.log(far.hasOwnProperty('myProp'));
console.log(boo.isPrototypeOf(far));
