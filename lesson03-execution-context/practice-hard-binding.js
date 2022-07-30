// 2
let obj = {
  message: 'JavaScript',
};

function foo() {
  console.log(this.message);
}

foo.bind(obj);
// Returns new function that references original function `foo` and is
// permanently bound to execution context `obj`.

// 3
let obj2 = {
  a: 2,
  b: 3,
};

function foo() {
  return this.a + this.b;
}

let bar = foo.bind(obj2);

console.log(bar()); // 5

// 4
let positiveMentality = {
  message: 'JavaScript makes sense!',
};

let negativeMentality = {
  message: 'JavaScript makes no sense!',
};

function foo2() {
  console.log(this.message);
}

let bar2 = foo2.bind(positiveMentality);

negativeMentality.logMessage = bar2;
console.log(negativeMentality.logMessage()); // 'JavaScript makes sense!'
// bar2 is a function that executes foo2 using positiveMentality as the EC.
// Even if negativeMentality has bar2 as a method, invoking it using
// negativeMentality as an explicit caller will not replace positiveMentality
// as the EC.

// 5
let obj5 = {
  a: 'Amazebulous!',
};
let otherObj = {
  a: "That's not a real word!",
};

function foo() {
  console.log(this.a);
}

let bar5 = foo.bind(obj5);

console.log(bar5.call(otherObj)); // "Amazebulous!"
obj5.a = 'Fantabulous!';
console.log(bar5.call(otherObj)); // "Fantabulous!"
// `bind` is permanent. Using `call` will not replace the EC.
