
function SavingsAccount(...args) {
  const myAccount = {
    _accountNumber: args[0],
    _email: args[1],
    _firstName: args[2],
    _lastName: args[3],
    products: [],
  };

  return myAccount;
}

export {
  SavingsAccount,
};
