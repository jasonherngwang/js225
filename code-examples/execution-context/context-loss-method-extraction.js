// Context Loss: Method taken out of object
let obj = {
  a: 1,
  func() {
    console.log(this.a);
  },
};
obj.func(); // 1 (normal method invocation with `obj` as explicit receiver)

let outsideVar = obj.func; // Method taken out of object.

outsideVar();
// window.a => undefined (non-strict)
// undefined.a => TypeError (strict)

// Fix 1: Use `call` or `apply`
outsideVar.call(obj); // 1
outsideVar.apply(obj); // 1

// Fix 2: Pass context as another argument
function twice(func, context) {
  func.call(context);
  func.call(context);
}

twice(outsideVar, obj);
// 1
// 1

// Fix 3: Hard binding
twice(outsideVar.bind(obj));
// 1
// 1
