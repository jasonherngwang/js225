// ES6 class
class MyClass {
  constructor(value) {
    this._val = value;
  }

  get() {
    return this._val;
  }
}

let a = new MyClass('a');
console.log(a.get()); // a

class SubMyClass extends MyClass {
  constructor(value) {
    super(value);
  }

  get() {
    return super.get() + '!';
  }
}

let b = new SubMyClass('b');
console.log(b.get()); // b!
