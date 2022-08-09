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
// variable `array`, which is only mutated, not reassigned.
// `pushIt` is a global variable, available until we dereference it.
// The array can only be GC'd after the program ends.

// more code
