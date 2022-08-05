// 1. Use objects to reorganize the data.
// let scissorsId = 0;
// let scissorsName = 'Scissors';
// let scissorsStock = 8;
// let scissorsPrice = 10;

// let drillId = 1;
// let drillName = 'Cordless Drill';
// let drillStock = 15;
// let drillPrice = 45;

function createProduct(id, name, stock, price) {
  return {
    id,
    name,
    stock,
    price,
    setPrice(newPrice) {
      if (newPrice < 0) {
        console.log('Cannot use a negative price.');
      } else {
        this.price = newPrice;
      }
    },
    describe() {
      function capitalize(string) {
        return string[0].toUpperCase() + string.slice(1);
      }
      let capitalizedName = this.name
        .split(' ')
        .map((namePart) => capitalize(namePart))
        .join(' ');
      console.log(`=> Name: ${capitalize(capitalizedName)}`);
      console.log(`=> ID: ${this.id}`);
      console.log(`=> Price: $${this.price}`);
      console.log(`=> Stock: ${this.stock}`);
    },
  };
}

let scissors = createProduct(0, 'Scissors', 8, 10);
let cordlessDrill = createProduct(1, 'Cordless Drill', 15, 45);
let cordedDrill = createProduct(2, 'Corded Drill', 20, 30);
console.log(scissors, cordlessDrill, cordedDrill);

cordlessDrill.setPrice(-100);
cordlessDrill.setPrice(100);
console.log(cordlessDrill);

cordlessDrill.describe();
