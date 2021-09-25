// let balance = 500.00;

// Creates a new user account
class Account {
  constructor(username) {
    this.username = username;
    this.transactions = [];
    // Initial balance at 0
    // this.balance = 0;
  }

  get balance() {
    // Calculate the balance using the transaction objects
    let balance = 0;
    for (let t of this.transactions) {
      balance += t.value;
    }
    return balance;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}

// Create a superclass Transaction
class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    if (!this.isAllowed()) return false;
    // Keep track of transaction time
    this.time = new Date();
    // Keep track of transaction to account
    this.account.addTransaction(this);
    return true;

    //this.account.balance += this.value;
  }
}

class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }

  // Allowed or nah based on account balance
  isAllowed() {
    return (this.account.balance - this.amount >= 0);
  }

}

class Deposit extends Transaction {

  get value() {
    return this.amount;
  }
  isAllowed() {
    // deposits are always allowed
    return true;
  }
}


// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account("eileen");

console.log('Starting Balance', myAccount.balance);

t1 = new Deposit(50.25, myAccount);
t1.commit();
console.log('Transaction 1:', t1);

t2 = new Withdrawal(10.28, myAccount);
t2.commit();
console.log('Transaction 2:', t2);

t3 = new Deposit(45.75, myAccount);
t3.commit();
console.log('Transaction 3:', t3);

console.log('Ending Balance:', myAccount.balance);
console.log('Account Transactions History', myAccount.transactions);
