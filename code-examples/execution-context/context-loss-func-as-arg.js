// Context loss: Function as argument
let obj = {
  a: 1,
  func() {
    // Pass callback. `this` references global object.
    [1, 2, 3].forEach(function (num) {
      console.log(num + this.a);
    });
  },
};

obj.func();
// NaN
// NaN
// NaN

// Fix 1: let self = this
let obj2 = {
  a: 1,
  func() {
    let self = this;

    [1, 2, 3].forEach(function (num) {
      console.log(num + self.a);
    });
  },
};

obj2.func();
// 2
// 3
// 4

// Fix 2: bind
let obj3 = {
  a: 1,
  func() {
    [1, 2, 3].forEach(
      // This is a function expression, not a function declaration, so we can
      // use bind.
      function (num) {
        console.log(num + this.a);
      }.bind(this)
    );
  },
};

obj3.func();
// 2
// 3
// 4

// Fix 3: Arrow function
let obj4 = {
  a: 1,
  func() {
    [1, 2, 3].forEach((num) => {
      console.log(num + this.a);
    });
  },
};

obj4.func();
// 2
// 3
// 4

// Fix 4: thisArg
let obj5 = {
  a: 1,
  func() {
    [1, 2, 3].forEach(function (num) {
      console.log(num + this.a);
    }, this);
  },
};

obj5.func();
// 2
// 3
// 4
