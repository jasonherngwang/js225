// 2
// Are either of the values 1 or ['this is an array] eligible for garbage
// collection on line 5? What about on line 10?

// 1 is a primitive stored on the stack, and the stack doesn't get GC'd.
let myNum = 1;

function foo() {
  let myArr = ['this is an array'];
  // what is eligible for GC here?
}

foo();

// what is eligible for GC here?
// ['this is an array'] can be GC'd here since myArr is function scoped.
// After `foo` completes execution there are no more references to the array.

// more code

// 3
// Is the object created and assigned to foo on line 2 eligible for garbage
// collection on line 11?
function makeGreeting() {
  let foo = { greeting: 'hello' };
  return function (name) {
    foo.name = name;
    return foo;
  };
}

let greeting = makeGreeting();

// is the object eligible for GC here?
// No. `foo` is referenced by the closure associated with the returned function.
// { greeting: 'hello' } cannot be GC'd until the closure is dereferenced.

// more code

// 4
// We can GC {} after the program completes execution.
let bash = {};
