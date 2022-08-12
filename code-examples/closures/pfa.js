function makeCar(manufacturer, model, licensePlate) {
  return {
    manufacturer,
    model,
    showLicense() {
      return licensePlate.slice(0, 4) + 'XXXX';
    },
  };
}

function carManufacturer(manufacturer) {
  // Private data in closure
  let licensePlate = '12345678';

  return function carModeler(model) {
    return makeCar(manufacturer, model, licensePlate);
  };
}

let toyota = carManufacturer('Toyota');
let prius = toyota('Prius');
console.log(prius);
console.log(prius.showLicense()); // 1234XXXX
// No direct access to private data; can only interact with it through the
// specified interface.
console.log(prius.licensePlate); // undefined
