// Using function factory
function makeCat(name, type, fed = false) {
  return {
    name,
    type,
    fed,
    meow() {
      console.log(`Meow. I am ${this.name}, a ${this.type}.`);
      if (!this.fed) console.log('Is it dinner time yet?');
    },
    feed() {
      this.fed = true;
      console.log('Nom nom nom.');
    },
  };
}

let tabitha = makeCat('Tabitha', 'tabby cat');
tabitha.meow();
tabitha.feed();
tabitha.meow();
tabitha.feed();

let sammy = makeCat('Sammy', 'Siamese cat');
sammy.meow();
sammy.feed();

// Without function factory
let bobName = 'Bob';
let bobType = 'Bobcat';
let bobFed = true;

let callieName = 'Callie';
let callieType = 'calico cat';
let callieFed = false;

function meow(name, type, fed) {
  console.log(`Meow. I am ${name}, a ${type}.`);
  if (!fed) console.log('Is it dinner time yet?');
}

meow(bobName, bobType, bobFed);
meow(callieName, callieType, callieFed);
