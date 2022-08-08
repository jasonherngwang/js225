// Run this in the browser (non-strict mode)

var a = 1; // global variable and property of global object => window.a

let obj1 = {
  a: 2,
  print() {
    console.log(this.a);
  },
};

let obj2 = {
  a: 3,
};

let func = obj1.print; // Method taken out of object; context loss
func(); // 1 (implicit FEC is global object; window.a)

let func2 = obj1.print.bind(obj2);
func2(); // 3 (permanently bound to obj2

obj1.print(); // 2 (obj1.func remains unaltered)
