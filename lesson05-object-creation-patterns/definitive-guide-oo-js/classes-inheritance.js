// Class prototype
let Class = {
  get() {
    return this.val;
  },
};

// Subclass prototype
let Subclass = Object.create(Class);
Subclass.get = function () {
  return Class.get.call(this) + '!';
};

// Instances
let a = Object.create(Class); // 1. Extend prototype
a.val = 'a'; // 2. Initialize the data
console.log(a.get()); // a

let b = Object.create(Subclass);
b.val = 'b';
console.log(b.get()); // b!
