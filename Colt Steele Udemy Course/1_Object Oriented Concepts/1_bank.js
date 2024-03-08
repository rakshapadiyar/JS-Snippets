class Bank {
  constructor(id, name, amount) {
    this.id = id;
    this.name = name;
    this.amount = amount;
  }

  deposit(dep) {
    if (dep <= 0) {
      console.log(`Cannot deposit 0 or less than 0 amount`);
    } else {
      this.amount = this.amount + dep;
      console.log(
        `Amount ${dep} added ${this.amount} remains in account of ${this.name}`
      );
    }
  }
  withdraw(withdr) {
    if (withdr > this.amount) {
      console.log(
        `Cannot withdraw ${withdr} as it is more than the current balance int the account ${this.amount}`
      );
    } else if (withdr <= 0) {
      console.log(`Cannot withdraw 0 or less than 0 amount`);
    } else {
      this.amount = this.amount - withdr;
      console.log(
        `Withdrawn ${withdr}, current balance int the account ${this.amount}`
      );
    }
  }

  checkBalance() {
    console.log(
      `Amount ${this.amount} is the balance of User : ${this.name}, ID : ${this.id}`
    );
  }
}

var emp1 = new Bank(1, "Binod", 1000);
var emp2 = new Bank(1, "Baldev", 2000);
emp1.deposit(0);
emp1.deposit(500);
emp2.deposit(2000);
emp1.checkBalance();
emp2.checkBalance();
emp2.withdraw(5000);
emp2.withdraw(4000);
