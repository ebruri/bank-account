function Bank() {
  this.accounts = {}
  this.accountId = 0;
}
Bank.prototype.addAccount = function(account) {
  account.id = this.assignId();
  this.accounts[account.id] = account;
}
Bank.prototype.assignId = function() {
  this.accountId +=1;
  return this.currentId;
}
Bank.prototype.findAccount = function(id) {
  if (this.accounts[id] != undefined) {
    return this.accounts[id];
  }
  return false;
}

function Account(name, balance) {
  this.name = name;
  this.balance = balance;
}
Account.prototype.deposit = function(amount){
  this.balance = this.balance + parseInt(amount);
}
Account.prototype.withdrawal = function(amount){
  this.balance = this.balance - amount;
}

//UI Logic --------------------------
let newBank = new Bank();
$(document).ready(function(){
  $("#new-account").submit(function(event){
    event.preventDefault();
    const inputtedName = $("#name").val();
    const inputtedBalance = $("#initial-deposit").val();
    let newAccount = new Account (inputtedName, inputtedBalance);
    newBank.addAccount(newAccount);
    displayBalance(newAccount);
    displayNumber(newBank);
    emptyForm();
  });
  function displayBalance(account){
    $("#current-balance").show();
    $("#account").html(account.name);
    $("#balance").html(account.balance);
  };
  function displayNumber(account) {
    $("#number").html(account.accountId);
  };
  function emptyForm(){
    $("#name").val("");
    $("#initial-deposit").val("");
    $("#account-name").val("");
    $("#deposit").val("");
    $("#withdrawal").val("");
  };
  $("#change-balance").submit(function(event){
    event.preventDefault();
    const accountNumber = $("#account-number").val();
    const inputtedDeposit = $("#deposit").val();
    const inputtedWithdrawal = $("#withdrawal").val();     
    const bankAccount = newBank.findAccount(accountNumber);
    bankAccount.withdrawal(inputtedWithdrawal);
    bankAccount.deposit(inputtedDeposit);
    displayBalance(bankAccount);
    emptyForm();
  });
});