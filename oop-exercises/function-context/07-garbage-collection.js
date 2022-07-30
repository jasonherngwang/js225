function makeArrays() {
  let array = [];

  return () => {
    array.push('');
    return array;
  };
}

const pushIt = makeArrays();
pushIt();
// Will the array get GC'd here?
// No. The closure of pushIt persists a reference to the array referenced by
// variable `array`. `pushIt` is a global variable.
// The array will be GC'd after the program ends.

// more code
