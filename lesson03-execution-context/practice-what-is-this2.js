// 1
// Explicit receiver is myObject.myChildObject
// `this` references `myChildObject`
// Returns undefined since myChildObject.count doesn't exist.
let myObject = {
  count: 1,
  myChildObject: {
    myMethod() {
      return this.count;
    },
  },
};

console.log(myObject.myChildObject.myMethod());

// 2
// Use `call` and explicitly set context.
let myObject2 = {
  count: 1,
  myChildObject: {
    myMethod() {
      return this.count;
    },
  },
};

console.log(myObject2.myChildObject.myMethod.call(myObject2));

// 3
let person = {
  firstName: 'Peter',
  lastName: 'Parker',
  fullName() {
    console.log(
      this.firstName + ' ' + this.lastName + ' is the Amazing Spiderman!'
    );
  },
};

let whoIsSpiderman = person.fullName.bind(person);
whoIsSpiderman(); // Peter Parker is the Amazing Spiderman

// 4
// Internal function loses context.
// Use arrow function. `this` is resolved lexically and finds the
// innermost enclosing context as the object `computer`.
let computer = {
  price: 30000,
  shipping: 2000,
  total() {
    let tax = 3000;
    // function specialDiscount() {
    specialDiscount = () => {
      if (this.price > 20000) {
        return 1000;
      } else {
        return 0;
      }
    };

    return this.price + this.shipping + tax - specialDiscount();
  },
};

console.log(computer.total());

// Specify context explicitly, using `call`
let computer2 = {
  price: 30000,
  shipping: 2000,
  total() {
    let tax = 3000;
    function specialDiscount() {
      if (this.price > 20000) {
        return 1000;
      } else {
        return 0;
      }
    }

    return this.price + this.shipping + tax - specialDiscount.call(this);
  },
};

console.log(computer2.total());

// Permanently bind function to context
let computer3 = {
  price: 30000,
  shipping: 2000,
  total() {
    let tax = 3000;
    let specialDiscount = function () {
      if (this.price > 20000) {
        return 1000;
      } else {
        return 0;
      }
    }.bind(this);

    return this.price + this.shipping + tax - specialDiscount();
  },
};

console.log(computer3.total());

// Save this in lexical scope. Use `let self = this`
let computer4 = {
  price: 30000,
  shipping: 2000,
  total() {
    let tax = 3000;
    let self = this;
    function specialDiscount() {
      if (self.price > 20000) {
        return 1000;
      } else {
        return 0;
      }
    }

    return this.price + this.shipping + tax - specialDiscount();
  },
};

console.log(computer4.total());
