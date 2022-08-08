// 1
// startNum is in the closure of the returned function. It is accessed every
// time the function is invoked.
function makeCounterLogger(startNum) {
  return (stopNum) => {
    let currentNum = startNum;
    if (stopNum >= startNum) {
      while (currentNum <= stopNum) {
        console.log(currentNum);
        currentNum += 1;
      }
    } else {
      while (currentNum >= stopNum) {
        console.log(currentNum);
        currentNum -= 1;
      }
    }
  };
}

let countlog = makeCounterLogger(5);
countlog(8);
// 5
// 6
// 7
// 8
countlog(2);
// 5
// 4
// 3
// 2
countlog(5);
// 5

// 2
function makeList() {
  // todos is private data in the returned function's closure, only accessible
  // by the function.
  let todos = [];

  return function (todo) {
    if (todo === undefined) {
      if (todos.length === 0) {
        console.log('The list is empty');
      } else {
        todos.forEach((todo) => console.log(todo));
      }
    } else if (!todos.includes(todo)) {
      todos.push(todo);
      console.log(`${todo} added!`);
    } else {
      todos.splice(todos.indexOf(todo), 1);
      console.log(`${todo} removed!`);
    }
  };
}

let list = makeList();
list();
// The list is empty.
list('make breakfast');
// make breakfast added!
list('read book');
// read book added!
list();
// make breakfast
// read book
list('make breakfast');
// make breakfast removed!
list();
// read book
