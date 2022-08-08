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
// Cannot GC a = [1, 2] until program ends, since it is a global variable.

// 2
// In the following code, when can JavaScript garbage collect the value
// ["Steve", "Edie"]?
function makeHello(names) {
  return function () {
    console.log('Hello, ' + names[0] + ' and ' + names[1] + '!');
  };
}

let helloSteveAndEdie = makeHello(['Steve', 'Edie']);
// Can GC ["Steve", "Edie"] after the program ends.
// Within makeHello, the function references `names`, so `names` is in its
// closure. This persistent reference prevents the Array from being GC'd until
// the program ends, and the function associated with that closure is GC'd.
