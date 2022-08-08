function func() {
  // JS allocates memory for the variable and object.
  let a = {
    b: 1,
  };

  console.log(a.b); // Do something with `a`.
  return a;
}

let c = func();
// `c` is assigned to the object { b: 1 }, which is not eligible for GC.
console.log(c); // { b: 1 }
