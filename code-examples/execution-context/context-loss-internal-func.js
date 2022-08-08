// Context Loss: Internal function
let obj = {
  a: 1,
  func() {
    function internalFunc() {
      console.log(this.a);
    }

    internalFunc();
  },
};

obj.func(); // undefined

// Fix 1: let self = this
let obj2 = {
  a: 1,
  func() {
    let self = this;

    function internalFunc() {
      console.log(self.a); // References `self` in lexical scope.
    }

    internalFunc();
  },
};

obj2.func(); // 1

// Fix 2: call
let obj3 = {
  a: 1,
  func() {
    function internalFunc() {
      console.log(this.a);
    }

    internalFunc.call(this); // Explicitly set FEC to `this`(`obj3`)
  },
};

obj3.func(); // 1

// Fix 3: bind
let obj4 = {
  a: 1,
  func() {
    // Function expression, not declaration
    const internalFunc = function () {
      console.log(this.a);
    }.bind(this); // Permanently bound to containing object.

    internalFunc();
  },
};

obj4.func(); // 1

// Fix 4: Arrow function
let obj5 = {
  a: 1,
  func() {
    // Arrow functions search lexical scope for `this`
    const internalFunc = () => {
      console.log(this.a);
    };

    internalFunc();
  },
};

obj5.func(); // 1
