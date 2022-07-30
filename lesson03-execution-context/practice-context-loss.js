// 1
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

// function logReturnVal(func) {
//   let returnVal = func(); // Function call; context is global object.
//   console.log(returnVal); // 'undefined undefined is a undefined'
// }

function logReturnVal(func, context) {
  let returnVal = func.call(context);
  console.log(returnVal);
}

// Pass method; loses context when extracted from object `turk`.
logReturnVal(turk.getDescription, turk);

let getTurkDescription = turk.getDescription.bind(turk);
console.log(getTurkDescription());

// 4
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
    this.titles.forEach(function (title) {
      console.log(this.seriesTitle + ' ' + title);
    });
  },
};

TESgames.listGames();

// Using arrow function
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

// Using `let self = this`
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

// Using forEach's thisArg
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

// 8
// Internal function loses context. `this.a` references property of global
// object, `window.a`.
// Nothing happens to foo.a; it remains 0.
let foo = {
  a: 0,
  incrementA() {
    const increment = function () {
      this.a += 1;
    }.bind(this);

    increment();
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

    increment.apply(this);
    increment.apply(this);
    increment.apply(this);
  },
};

foo2.incrementA();
console.log(foo2.a);
