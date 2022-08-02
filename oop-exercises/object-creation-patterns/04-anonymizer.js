/*
Using OLOO create an Account prototype object that anonymizes user objects on 
init. The created object should not have access to the function that anonymizes 
a user other than through the init and reanonymize methods. The function that 
anonymizes creates a 16 character sequence composed of letters and numbers. 
*/

let Account = (function() {
  function generateAnonymousName() {
    let CHARSET = [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRTSUVWXYZ1234567890'];
    let name = '';
    for (let i = 1; i <= 16; i += 1) {
      let index = Math.random()
      name += CHARSET[Math.floor(Math.random() * 16)];
    }
    return name;
  }
  
  return {
    init(email, password, firstName, lastName) {
      this.userEmail = email;
      this.userPassword = password;
      this.userFirstName = firstName;
      this.userLastName = lastName;
      this.displayName = generateAnonymousName();
      return this;
    },
    validPassword(password) {
      return password === this.userPassword;
    },
    reanonymize(password) {
      if (this.validPassword(password)) {
        this.displayName = generateAnonymousName();
        return true;
      }
      return 'Invalid Password';
    },
    resetPassword(password, newPassword) {
      if (this.validPassword(password)) {
        this.userPassword = newPassword;
        return true;
      }
      return 'Invalid Password';
    },
    firstName(password) {
      if (this.validPassword(password)) return this.userFirstName;
      return 'Invalid Password';
    },
    lastName(password) {
      if (this.validPassword(password)) return this.userLastName;
      return 'Invalid Password';
    },
    email(password) {
      if (this.validPassword(password)) return this.userEmail;
      return 'Invalid Password';
    },
  }
})();

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false