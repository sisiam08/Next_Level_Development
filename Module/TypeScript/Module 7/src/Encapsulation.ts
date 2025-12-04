class BankAccount {
  protected readonly accountNumber: string;
  public accountHolder: string;
  private accountBalance: number;

  constructor(
    accountNumber: string,
    accountHolder: string,
    accountBalance: number
  ) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.accountBalance = accountBalance;
  }

  private diposite(amount: number) {
    this.accountBalance += amount;
  }

  accessHiddenDiposite(amount: number) {
    this.diposite(amount);
  }

  displayBalance() {
    console.log(`Account Balance: ${this.accountBalance}`);
  }
}

class StudentBankAccount extends BankAccount {
  accountInfo() {
    this.accountHolder;
    // this.accountNumber; // 'accountNumber' is protected and only accessible within class 'BankAccount' and its subclasses.
    // this.accountBalance; // 'accountBalance' is private and only accessible within class 'BankAccount'.
  }
}

const myAccount = new BankAccount("123456789", "Osman", 1000);

myAccount.accessHiddenDiposite(500);

console.log("Account Balance:", myAccount.displayBalance);
