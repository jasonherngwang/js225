// 1, 2, 3
// Desired output: Christopher Turk is a Surgeon.

let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
    return (
      this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.'
    );
  },
};

// Original
// function logReturnVal(func) {
//   let returnVal = func(); // Function call; context is global object.
//   console.log(returnVal); // 'undefined undefined is a undefined'
// }

// Extracting the method removes context.
// Passing the method also removes context.
logReturnVal(turk.getDescription, turk); // Christopher Turk is a Surgeon.

// Fix 1: Using `call`
function logReturnVal(func, context) {
  let returnVal = func.call(context);
  console.log(returnVal);
}

// Fix 2: Using `bind`
let getTurkDescription = turk.getDescription.bind(turk);
console.log(getTurkDescription()); // Christopher Turk is a Surgeon.

// 4-7
// Desired output:
// The Elder Scrolls Arena
// The Elder Scrolls Daggerfall
// The Elder Scrolls Morrowind
// The Elder Scrolls Oblivion
// The Elder Scrolls Skyrim

// Functions passed as args lose context.
// `this.seriesTitle` return `undefined`.
// Will log 'undefined Arena`, etc.

let TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames() {
    // Callback loses surrounding context
    this.titles.forEach(function (title) {
      console.log(this.seriesTitle + ' ' + title);
    });
  },
};

TESgames.listGames();
// undefined Arena
// undefined Daggerfall
// undefined Morrowind
// undefined Oblivion
// undefined Skyrim

// Fix 1: Using arrow function
let TESgames2 = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames() {
    this.titles.forEach((title) => {
      console.log(this.seriesTitle + ' ' + title);
    });
  },
};

TESgames2.listGames();

// Fix 2: let self = this
let TESgames3 = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames() {
    let self = this;
    this.titles.forEach(function (title) {
      console.log(self.seriesTitle + ' ' + title);
    });
  },
};

TESgames3.listGames();

// Fix 3: Using forEach's thisArg
let TESgames4 = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames() {
    this.titles.forEach(function (title) {
      console.log(this.seriesTitle + ' ' + title);
    }, this);
  },
};

TESgames4.listGames();

// Fix 4: Using `bind`
let TESgames5 = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames() {
    this.titles.forEach(
      function (title) {
        console.log(this.seriesTitle + ' ' + title);
      }.bind(this)
    );
  },
};

TESgames5.listGames();

// 8
// Internal function loses context. `this.a` references property of global
// object, `window.a`.
// Each invocation performs: window.a = window.a + 1 = undefined + 1 = NaN
// Nothing happens to foo.a; it remains 0.
// window.a is NaN at the end.

// Fix 1: Use `apply`
let foo = {
  a: 0,
  incrementA() {
    function increment() {
      this.a += 1;
    }

    increment.apply(this);
  },
};

foo.incrementA();
foo.incrementA();
foo.incrementA();
console.log(foo.a);

// 10
let foo2 = {
  a: 0,
  incrementA() {
    const increment = function () {
      this.a += 1;
    }.bind(this);

    increment();
    increment();
    increment();
  },
};

foo2.incrementA();
console.log(foo2.a);
