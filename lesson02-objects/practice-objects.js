'use strict';

// Practice Problems: Objects

let invoices = {
  unpaid: [],
  paid: [],
};

invoices.add = function (name, amount) {
  this.unpaid.push({ name, amount });
};

invoices.totalDue = function () {
  return this.unpaid.reduce((sum, invoice) => sum + invoice.amount, 0);
};

invoices.totalPaid = function () {
  return this.paid.reduce((sum, invoice) => sum + invoice.amount, 0);
};

invoices.payInvoice = function (name) {
  let unpaid = [];

  this.unpaid.forEach(function (invoice) {
    if (name === invoice.name) {
      this.paid.push(invoice);
    } else {
      unpaid.push(invoice);
    }
  }, this);

  this.unpaid = unpaid;
};

invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.5);
invoices.add('Slough Digital', 300);
console.log(invoices.totalDue());

invoices.payInvoice('Due North Development');
invoices.payInvoice('Slough Digital');
console.log(invoices.totalPaid());
console.log(invoices.totalDue());
