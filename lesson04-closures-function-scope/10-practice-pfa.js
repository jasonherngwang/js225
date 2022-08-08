// 1
function subtract(a, b) {
  return a - b;
}

function sub5(a) {
  // implement this function using partial function application
  return subtract(a, 5);
}

console.log(sub5(10)); // 5
console.log(sub5(20)); // 15

// 2
function makeSubN(n) {
  // implement this function...
  return function (a) {
    return subtract(a, n);
  };
}

let sub5Version2 = makeSubN(5);
console.log(sub5Version2(10)); // 5

// 3
function makePartialFunc(func, b) {
  // implement this function...
  return function (a) {
    return func(a, b);
  };
}

function multiply(a, b) {
  return a * b;
}

let multiplyBy5 = makePartialFunc(multiply, 5);

console.log(multiplyBy5(100)); // 500

// 5
let subjects = {
  English: ['Bob', 'Tyrone', 'Lizzy'],
  Math: ['Fatima', 'Gary', 'Susan'],
  Biology: ['Jack', 'Sarah', 'Tanya'],
};

function rollCall(subject, students) {
  console.log(subject + ':');
  students.forEach(function (student) {
    console.log(student);
  });
}

function makeMathRollCall() {
  // implement this function...
  let subject = 'Math';
  return function (students) {
    return rollCall(subject, students);
  };
}

let mathRollCall = makeMathRollCall();
mathRollCall(subjects['Math']);
// => Math:
// => Fatima
// => Gary
// => Susan
