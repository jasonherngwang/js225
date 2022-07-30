/*
`function(number)` is an internal function inside the method allMovies.
It doesn't inherit the function execution context of allMovies; rather, its
execution context is the global object. Therefore `this.name` returns undefined
or throws an error (strict mode).

This is an example of internal function losing context.

To fix, we can:
- Use let self = this
- map accepts a thisArg. Pass franchise as this argument.
- Bind the callback to `this`.
- Use an arrow function which will search for `this` in lexical scope and find
  it to be `franchise`.

Expected output:

[
  'How to Train Your Dragon 1',
  'How to Train Your Dragon 2',
  'How to Train Your Dragon 3'
]

*/

// Fix 1
const franchise = {
  name: 'How to Train Your Dragon',
  allMovies() {
    let self = this;
    return [1, 2, 3].map(function (number) {
      return `${self.name} ${number}`;
    });
  },
};

console.log(franchise.allMovies());

// Fix 2
const franchise2 = {
  name: 'How to Train Your Dragon',
  allMovies() {
    return [1, 2, 3].map(function (number) {
      return `${this.name} ${number}`;
    }, this);
  },
};

console.log(franchise2.allMovies());

// Fix 3
const franchise3 = {
  name: 'How to Train Your Dragon',
  allMovies: function () {
    return [1, 2, 3].map(
      function (number) {
        return `${this.name} ${number}`;
      }.bind(this)
    );
  },
};

console.log(franchise3.allMovies());

// Fix 4
const franchise4 = {
  name: 'How to Train Your Dragon',
  allMovies() {
    return [1, 2, 3].map((number) => {
      return `${this.name} ${number}`;
    });
  },
};

console.log(franchise4.allMovies());
