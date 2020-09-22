// Static function to perform actions on the account and persist it while the process is alive.
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
    this.validateAccount(idOrigin);
    this.account.balance -= amount;
    return this.account.balance;
  },

  validateAccount(id) {
    if (this.account.id !== id) {
      // This error is handled on the previous layer.
      throw new Error('INVALID_ACCOUNT');
    }
  },
};

module.exports = accountService;
