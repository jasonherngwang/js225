// Prototypal inheritance
let parent = {
  get() {
    return this.val;
  },
  val: 42,
};

// children inherit/extend from parent object, using Object.create
let child = Object.create(parent);
child.val = 888;

console.log(parent.get()); // 42
console.log(child.get()); // 888
// looks up prototype chain for get()
// `this` is `child`, not `parent`, so returns 888. Even though uses get()
// function from its parent.

let grandchild = Object.create(child);

console.log(grandchild.get()); // 888
// looks up prototype chain for BOTH get() and val, since it has neither
// `this` is grandchild
