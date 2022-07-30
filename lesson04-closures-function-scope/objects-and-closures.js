function makeList() {
  let items = [];

  return function (newItem) {
    let index;
    if (newItem) {
      index = items.indexOf(newItem);
      if (index === -1) {
        items.push(newItem);
        console.log(newItem + ' added!');
      } else {
        items.splice(index, 1);
        console.log(newItem + ' removed!');
      }
    } else if (items.length === 0) {
      console.log('The list is empty.');
    } else {
      items.forEach(function (item) {
        console.log(item);
      });
    }
  };
}

function makeList() {
  let items = []; // Will be in closures of methods using it.

  return {
    add(item) {
      let index = items.indexOf(item);
      if (index === -1) {
        items.push(item);
        console.log(`${item} added!`);
      } else {
        console.log(`${item} is already in the list`);
      }
    },
    list() {
      if (items.length === 0) {
        console.log('The list is empty.');
      } else {
        items.forEach((item) => console.log(item));
      }
    },
    remove(item) {
      let index = items.indexOf(item);
      if (index === -1) {
        console.log(`${item} is not in the list.`);
      } else {
        items.splice(index, 1);
        console.log(`${item} removed!`);
      }
    },
  };
}

let list = makeList();
list.add('peas');
// peas added!
list.list();
// peas
list.add('corn');
// corn added!
list.list();
// peas
// corn
list.remove('peas');
// peas removed!
list.list();
// corn
console.log(list.items); // undefined
