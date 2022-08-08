// JS associates/links each variable/identifier with a memory address, during
// the Creation Phase. This address can contain a value (primitive) or another
// memory address where an Object is stored.

function func(x) {
  console.log(x);
}

let a = 1;
let b = [];

func(a); // 1
//             stack
// a --link--> 0x1234 (value: 1)
// x --link--> 0x2345 (value: 1)

func(b); // []
//             stack           heap
// b --link--> 0x3456 --ref--> 0x4567 (value: [])
// x --link--> 0x5678 --ref--> 0x4567 (value: [])
