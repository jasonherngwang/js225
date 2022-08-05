// Mutating objects

// 1
// Strings are immutable primitives.
// JS is pass-by-value for primitives; a copy is made when passing.
// Within the function the local variable references a different string than
// the global variable initialized on the first line.
let message = 'Hello from the global scope!';

function func(message) {
  message = 'Hello from the function scope!';
  console.log(message);
}

func(message); // 'Hello from the function scope!'
console.log(message); // 'Hello from the global scope!'

// 2
// Objects are mutable.
// JS is pass-by-reference-value for objects. `obj` in the function references
// the same object as `myObj` and can mutate it.
let myObj = { message: 'Greetings from the global scope!' };

function func2(obj) {
  obj.message = 'Greetings from the function scope!';
  console.log(obj.message);
}

func2(myObj); // 'Greetings from the function scope!'

console.log(myObj.message); // 'Greetings from the function scope!'

// 3
// Inner scope of func3 has access to outer scope, per lexical scoping rules.
let message3 = 'Hello from the global scope!';

function func3() {
  message3 = 'Hello from the function scope!';
  console.log(message3);
}

func3(); // 'Hello from the function scope!'
console.log(message3); // 'Hello from the function scope!'

// 4
// Property 'a' inside the object that both obj and newObj reference is
// reassigned to 20.
let a = 10;
let obj = {
  a,
};

let newObj = obj;
newObj.a += 10;

console.log(obj.a === a); // false
console.log(newObj.a === obj.a); // true

// 5. If objects are mutable, why does the second to last line return false?
// `animal` in global scope is reassigned to Timon, but menagerie.warthog still
// references Pumbaa.
let animal = {
  name: 'Pumbaa',
  species: 'Phacochoerus africanus',
};

let menagerie = {
  warthog: animal,
};

animal = {
  name: 'Timon',
  species: 'Suricata suricatta',
};

menagerie.meerkat = animal;

menagerie.warthog === animal; // false
menagerie.meerkat === animal; // true
