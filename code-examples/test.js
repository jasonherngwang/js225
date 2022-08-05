function func(x) {
  console.log(x);
}

let a = 1;
let b = [];

func(a); // 1
//        stack
// a ---> 0x1234 (value: 1)
// x ---> 0x2345 (value: 1)

func(b); // []
//        stack       heap
// b ---> 0x3456 ---> 0x4567 (value: [])
// x ---> 0x5678 ---> 0x4567 (value: [])
