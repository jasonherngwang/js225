'use strict';

let foo = {
  bar() {
    return this;
  },
};

console.log(foo.bar()); // { bar: [Function: bar] }

let baz = foo.bar;
console.log(baz()); // `global` (loose), `undefined` (strict)
