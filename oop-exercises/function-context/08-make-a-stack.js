function newStack() {
  const stack = [];

  return {
    push(...values) {
      stack.push(...values);
      return stack.length;
    },
    pop() {
      return stack.pop();
    },
    printStack() {
      stack.forEach((value) => console.log(value));
    },
  };
}

let stack = newStack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4, 5, 6);
stack.printStack();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.printStack();
