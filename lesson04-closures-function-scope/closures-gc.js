// 1
// In the following code, when can JavaScript garbage collect each of the
// following arrays? [1], [2], and [1, 2].

let a = [1];

function add(b) {
  a = a.concat(b); // Reassignment. concat returns new array. Can GC [1].
}

function run() {
  let c = [2];
  let d = add(c); // `add` returns `undefined`
}

run();
// Function execution complete. Can GC [2].
// Cannot GC a = [1, 2] since it is a global variable.

// 2
// In the following code, when can JavaScript garbage collect the value
// ["Steve", "Edie"]?
function makeHello(names) {
  return function () {
    console.log('Hello, ' + names[0] + ' and ' + names[1] + '!');
  };
}

let helloSteveAndEdie = makeHello(['Steve', 'Edie']);
// Can GC ["Steve", "Edie"] after makeHello completes execution.
// names[0] and names[1] references elements of names.
// There are no persistent references to names.
// names is NOT in the returned function's closure; its elements are.
