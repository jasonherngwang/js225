// 1
// The parameter (local variable) `num` is in the closure of the returned
// anonymous function.
function makeMultipleLister(num) {
  return function () {
    if (num < 100) {
      for (let i = num; i < 100; i += num) console.log(i);
    }
  };
}
let lister = makeMultipleLister(13);
lister();
// 13
// 26
// 39
// 52
// 65
// 78
// 91

// 2
// `runningTotal` is in global scope and in both functions' closures.
// Unlike other examples, it is also available outside the functions because it
// is in global scope.
let runningTotal = 0;

function add(num) {
  runningTotal += num;
  console.log(runningTotal);
}
function subtract(num) {
  runningTotal -= num;
  console.log(runningTotal);
}

add(1);
// 1
add(42);
// 43
subtract(39);
// 4
add(6);
// 10

// 3
// How can you set the value of systemStatus to the value of the inner variable
// status without changing startup in any way?
// Not possible to access private variables in a function's closure from outside
// the function.
function startup() {
  let status = 'ready';
  return function () {
    console.log('The system is ready.');
  };
}

let ready = startup();
// let systemStatus = // ?
