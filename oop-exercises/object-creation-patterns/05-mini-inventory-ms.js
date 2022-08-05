/*
Inventory Management System

ItemCreator
- Checks information
- If information invalid, returns object { notValid: true }

ItemManager: CRUD item info
- create(name, category, quantiity)
- update(sku, obj)
- delete(sku)
- inStock()
- itemsInCategory()
- items (property)


ReportManager
- Creates report objects
- Report on 1 item
- Report on all items
- init(ItemManager)
- createReporter(sku)
  - Returns Reporter object
- reportInStock()

Reporter object
- itemInfo()

Item
- SKU
- Name
- Category
- Quantity (positive integer)

Object: ItemManager
- Has multiple methods
- Has 1 property, `items`, an array
- Use IIFE to keep behavior private.
Class: Item
Class: Reporter
*/

const ItemCreator = (() => {
  function hasSpaces(str) {
    return /\s+/g.test(str);
  }

  function removeWhitespace(name) {
    return name.replace(/\s+/g, '');
  }

  function validName(name) {
    return removeWhitespace(name).length >= 5;
  }

  function validCategory(category) {
    return !hasSpaces(category) && removeWhitespace(category).length >= 5;
  }

  function validItemInfo(name, category, quantity) {
    return validName(name) && validCategory(category) && quantity >= 0;
  }

  function createSKU(name, category) {
    const firstPart = removeWhitespace(name).slice(0, 3);
    const secondPart = removeWhitespace(category).slice(0, 2);
    return (firstPart + secondPart).toUpperCase();
  }

  // Constructor function to create item
  return function (name, category, quantity) {
    if (validItemInfo(name, category, quantity)) {
      this.sku = createSKU(name, category);
      this.name = name;
      this.category = category;
      this.quantity = quantity;
    } else {
      return { notValid: true };
    }
  };
})();

const ItemManager = (() => {
  return {
    items: [],
    create(name, category, quantity) {
      const item = new ItemCreator(name, category, quantity);
      if (item.notValid) {
        return false;
      } else {
        this.items.push(item);
      }
    },
    getItemIndex(sku) {
      return this.items.findIndex((item) => sku === item.sku);
    },
    update(sku, obj) {
      let index = this.getItemIndex(sku);
      if (index !== -1) Object.assign(this.items[index], obj);
    },
    delete(sku) {
      let index = this.getItemIndex(sku);
      if (index !== -1) this.items.splice(index, 1);
    },
    inStock() {
      return this.items.filter(({ quantity }) => quantity > 0);
    },
    itemsInCategory(category) {
      return this.items.filter((item) => item.category === category);
    },
  };
})();

const ReportManager = (() => {
  return {
    init(itemManager) {
      this.items = itemManager;
    },
    createReporter(sku) {
      let item = this.items.items.filter((item) => sku === item.sku)[0];
      return {
        itemInfo() {
          Object.entries(item).forEach(([key, val]) => {
            console.log(`${key}: ${val}`);
          });
        },
      };
    },
    reportInStock() {
      console.log(
        this.items
          .inStock()
          .map((item) => item.name)
          .join(',')
      );
    },
  };
})();

console.log(ItemManager.create('basket ball', 'sports', 0)); // valid item
console.log(ItemManager.create('asd', 'sports', 0));
console.log(ItemManager.create('soccer ball', 'sports', 5)); // valid item
console.log(ItemManager.create('football', 'sports'));
console.log(ItemManager.create('football', 'sports', 3)); // valid item
console.log(ItemManager.create('kitchen pot', 'cooking items', 0));
console.log(ItemManager.create('kitchen pot', 'cooking', 3)); // valid item

console.log(ItemManager.items);

ReportManager.init(ItemManager);
ReportManager.reportInStock();
// logs soccer ball,football,kitchen pot

ItemManager.update('SOCSP', { quantity: 0 });
console.log(ItemManager.inStock());
// returns list with the item objects for football and kitchen pot
ReportManager.reportInStock();
// logs football,kitchen pot
console.log(ItemManager.itemsInCategory('sports'));
// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
console.log(ItemManager.items);
// returns list with the remaining 3 valid items
// (soccer ball is removed from the list)

console.log('Kitchen Pot Operations');

const kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10
