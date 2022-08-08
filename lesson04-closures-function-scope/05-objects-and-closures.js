function makeList() {
  // Private data
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
