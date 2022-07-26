let greeter = {
  count: 0,
  morning() {
    console.log("Hello");
  },
  increment() {
    this.count += 1;
  },
  printCount() {
    // console.log(count); // Doesn't work; `count` not in scope.
    console.log(this.count);
  },
};

greeter.morning(); // Hello

let myMorning = greeter.morning;
myMorning(); // Hello

greeter.printCount(); // 0
greeter.increment();
greeter.printCount(); // 1
