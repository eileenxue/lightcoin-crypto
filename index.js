let balance = 500.00;

// Creates a new user account
class Account {
  constructor(username) {
    this.username = username;
    // Initial balance at 0
    this.balance = 0;
  }
}

// Create a superclass Transaction
class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    this.account.balance += this.value;
  }
}

class Withdrawal extends Transaction{

  get value() {
    return -this.amount;
  }
  // commit() {
  //   this.account.balance -= this.amount;
  // }

}

class Deposit extends Transaction{

  get value() {
    return this.amount;
  }
  // commit() {
  //   this.account.balance += this.amount;
  // }
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
