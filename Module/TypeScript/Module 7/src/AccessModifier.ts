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

  diposite(amount: number) {
    this.accountBalance += amount;
  }
  displayBalance() {
    console.log(`Account Balance: ${this.accountBalance}`);
  }
}

const myAccount = new BankAccount("123456789", "Osman", 1000);

myAccount.displayBalance();
myAccount.diposite(200);
myAccount.displayBalance();
