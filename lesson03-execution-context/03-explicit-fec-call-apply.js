// Explicit FEC

a = 1; // property of global object

let object = {
  a: 'hello',
  b: 'world',
};

function foo() {
  return this.a;
}

console.log(foo()); // 1 (implicit FEC is global object)
console.log(foo.call(object)); // "hello" (explicitly set FEC as `object`)

let strings = {
  a: 'hello',
  b: 'world',
  foo() {
    return this.a + this.b;
  },
};

let numbers = {
  a: 1,
  b: 2,
};

console.log(strings.foo()); // 'helloworld' (implicit FEC is calling object `strings`)
console.log(strings.foo.call(numbers)); // 3 (explicitly set FEC as `numbers`)

let iPad = {
  name: 'iPad',
  price: 40000,
};
let kindle = {
  name: 'kindle',
  price: 30000,
};

function printLine(lineNumber, punctuation) {
  console.log(
    lineNumber +
      ': ' +
      this.name +
      ', ' +
      this.price / 100 +
      ' dollars' +
      punctuation
  );
}

printLine.call(iPad, 1, ';'); // 1: iPad, 400 dollars; (explicit FEC is `iPad`)
printLine.call(kindle, 2, '.'); // 2: kindle, 300 dollars. (explicit FEC is `kindle`)
printLine.apply(iPad, [1, '!!!']); // 1: iPad, 400 dollars!!! (pass args in array)
