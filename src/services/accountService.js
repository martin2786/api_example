const accountService = {
  account: { id: '100', balance: 0 },

  initialize() {
    this.account = { id: '100', balance: 0 };
  },

  getBalance(id) {
    if (this.account.id !== id) {
      throw new Error('INVALID_ACCOUNT');
    }

    return this.account.balance;
  },

  deposit(idDestination, amount) {
    this.validateAccount(idDestination);
    this.account.balance += amount;
    return this.account.balance;
  },

  withdraw(idOrigin, amount) {
    this.validateAccount(idOrigin);
    this.account.balance -= amount;
    return this.account.balance;
  },

  transfer(idOrigin, amount) {
    console.log(idOrigin);
    this.validateAccount(idOrigin);
    this.account.balance -= amount;
    return this.account.balance;
  },

  validateAccount(id) {
    if (this.account.id !== id) {
      throw new Error('INVALID_ACCOUNT');
    }
  },
};

module.exports = accountService;
