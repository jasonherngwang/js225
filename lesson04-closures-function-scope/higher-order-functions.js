function timerFactory(func) {
  return function () {
    let start = new Date();
    func();
    let stop = new Date();
    console.log((stop - start).toString() + ' ms elapsed');
  };
}

timerFactory(() => console.log('doing something'))();
