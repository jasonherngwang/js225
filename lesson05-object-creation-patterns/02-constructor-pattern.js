function Lizard() {
  this.scamper = function () {
    console.log("I'm scampering!");
  };
}

let jason = new Lizard();
jason.scamper(); // I'm scampering!

let lizzy = Lizard(); // Missing new operator. Creates window.scamper property.
lizzy.scamper(); // TypeError
