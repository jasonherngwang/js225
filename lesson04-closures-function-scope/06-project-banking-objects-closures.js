// let account = {
//   balance: 0,
//   transactions: [],
//   deposit(amount) {
//     this.balance += amount;
//     this.transactions.push({ type: 'deposit', amount: amount });
//     return amount;
//   },
//   withdraw(amount) {
//     let withdrawnAmount = Math.min(this.balance, amount);
//     this.balance -= withdrawnAmount;
//     this.transactions.push({ type: 'withdrawal', amount: withdrawnAmount });
//     return withdrawnAmount;
//   },
// };

// Factory Object Creation Pattern
// Each Account object has its own state and copy of all the methods.
// We use closures to keep Account data private. We create methods to provide a
// user interface.
function makeAccount(accountNum) {
  let balance = 0;
  let transactions = [];

  return {
    number() {
      return accountNum;
    },
    balance() {
      return balance;
    },
    transactions() {
      return transactions;
    },
    deposit(amount) {
      balance += amount;
      transactions.push({ type: 'deposit', amount: amount });
      return amount;
    },
    withdraw(amount) {
      let withdrawnAmount = Math.min(balance, amount);
      balance -= withdrawnAmount;
      transactions.push({ type: 'withdrawal', amount: withdrawnAmount });
      return withdrawnAmount;
    },
  };
}

function makeBank() {
  // Private data
  let accounts = [];

  return {
    openAccount() {
      let newAccount = makeAccount(accounts.length + 101);
      accounts.push(newAccount);
      return newAccount;
    },
    transfer(source, destination, amount) {
      return destination.deposit(source.withdraw(amount));
    },
  };
}

// console.log(account.balance);
// // 0
// console.log(account.deposit(12));
// // 12
// console.log(account.balance);
// // 12
// console.log(account.deposit(10));
// // 10
// console.log(account.balance);
// // 22

// account.balance = 100;
// console.log(account.balance);
// // 100
// console.log(account.withdraw(19));
// // 19
// console.log(account.balance);
// // 81
// console.log(account.balance);
// // 81
// console.log(account.withdraw(91));
// // 81
// console.log(account.balance);
// // 0

// account.deposit(23);
// console.log(account.transactions);
// console.log(account.transactions[0]);

// let account = makeAccount();
// console.log(account.deposit(15));
// // 15
// console.log(account.balance);
// // 15
// let otherAccount = makeAccount();
// console.log(otherAccount.balance);
// // 0

// let bank = makeBank();
// console.log(bank.accounts); // []

// let bank = makeBank();
// let account = bank.openAccount();
// console.log(account.number);
// // 101
// console.log(bank.accounts);
// console.log(bank.accounts[0]);
// // {number: 101, balance: 0, transactions: Array[0]}
// let secondAccount = bank.openAccount();
// console.log(secondAccount.number);
// // 102

// let bank = makeBank();
// let source = bank.openAccount();
// console.log(source.deposit(10));
// // 10
// let destination = bank.openAccount();
// console.log(bank.transfer(source, destination, 7));
// // 7
// console.log(source.balance);
// // 3
// console.log(destination.balance);
// // 7

let bank = makeBank();
let account = bank.openAccount();
console.log(account.balance());
// 0
console.log(account.deposit(17));
// 17
let secondAccount = bank.openAccount();
console.log(secondAccount.number());
// 102
console.log(account.transactions());
// [Object]

console.log(bank.accounts);
// undefined
