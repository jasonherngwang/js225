/*
Using OLOO create an Account prototype object that anonymizes user objects on
init. The created object should not have access to the function that anonymizes
a user other than through the init and reanonymize methods. The function that
anonymizes creates a 16 character sequence composed of letters and numbers.

Notes
- Use IIFE to create private scope. Object referenced by Account has access to
  its private data (email, pass, etc) and private functions
  (generateAnonymousName, validPassword).
- Only displayName is a property of Account because we want to access it
  directly. Other variables are stored in closures of Account's methods, and can
  only be accessed via those methods.

Further Exploration
- Currently state is stored in Account. We need to keep behavior in Account and
  move state into the objects inheriting from it. In `init`, set properties of
  the current object using `this`.
  - However, now the state is directly accessible via fooBar.userEmail.
- Use another IIFE within init? No; this returns a new copy of ALL methods,
  resulting in duplication.
*/

// From Bob Rodes solution
let Account = (function () {
  const privateData = new WeakMap();
  const ERROR_MSG = 'Invalid Password';

  function isValidPassword(password, privateInfo) {
    return password === privateInfo.password;
  }

  function getRandomLetterNumber() {
    let randomIndex = Math.floor(Math.random() * 62);
    return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRTSUVWXYZ1234567890'[
      randomIndex
    ];
  }

  function anonymize() {
    let result = '';

    for (let i = 0; i < 16; i += 1) {
      result += getRandomLetterNumber();
    }

    return result;
  }

  return {
    init: function (email, password, firstName, lastName) {
      privateData.set(this, {
        email,
        password,
        firstName,
        lastName,
      });

      this.displayName = anonymize();

      return this;
    },

    reanonymize: function (password) {
      const privateInfo = privateData.get(this);
      if (isValidPassword(password, privateInfo)) {
        this.displayName = anonymize();
        return true;
      } else {
        return ERROR_MSG;
      }
    },

    resetPassword: function (currentPassword, newPassword) {
      const privateInfo = privateData.get(this);
      if (isValidPassword(currentPassword, privateInfo)) {
        privateInfo.password = newPassword;
        return true;
      } else {
        return ERROR_MSG;
      }
    },

    firstName: function (password) {
      const privateInfo = privateData.get(this);
      if (isValidPassword(password, privateInfo)) {
        return privateInfo.firstName;
      } else {
        return ERROR_MSG;
      }
    },

    lastName: function (password) {
      const privateInfo = privateData.get(this);
      if (isValidPassword(password, privateInfo)) {
        return privateInfo.lastName;
      } else {
        return ERROR_MSG;
      }
    },

    email: function (password) {
      const privateInfo = privateData.get(this);
      if (isValidPassword(password, privateInfo)) {
        return privateInfo.email;
      } else {
        return ERROR_MSG;
      }
    },
  };
})();

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar);
console.log(fooBar.firstName); // returns the firstName function
console.log(fooBar.email); // returns the email function
console.log(fooBar.firstName('123456')); // logs 'foo'
console.log(fooBar.firstName('abc')); // logs 'Invalid Password'
console.log(fooBar.displayName); // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc')); // logs 'Invalid Password'
console.log(fooBar.resetPassword('123456', 'abc')); // logs true

let displayName = fooBar.displayName;
console.log(fooBar.reanonymize('abc')); // returns true
console.log(displayName === fooBar.displayName); // logs false

let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(fooBar.firstName('abc')); // logs 'Invalid Password'
console.log(fooBar.email('abc')); // logs 'Invalid Password'
