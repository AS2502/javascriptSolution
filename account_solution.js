// Write a programme to impact the balances of the given accounts, based on their transactions.
// Print the final balance for all the accounts with account number, name and balance amount.

/* Input */
const accounts = [
    {
      'name': 'Arun',
      'accountNo': '001',
    },
    {
      'name': 'Babu',
      'accountNo': '002',
    },
    {
      'name': 'Chandra',
      'accountNo': '003',
    },
  ];
  
  const balances = {
    // accountNo: balance
    '001': 5000,
    '002': 2000,
    '003': 0,
  };
  
  const transactions = [
    {
      'accountNo': '001',
      'type': 'withdrawal',
      'amount': 1000,
    },
    {
      'accountNo': '001',
      'type': 'deposit',
      'amount': 500,
    },
    {
      'accountNo': '001',
      'type': 'withdrawal',
      'amount': 1000,
    },
    {
      'accountNo': '002',
      'type': 'deposit',
      'amount': 300,
    },
    {
      'accountNo': '002',
      'type': 'withdrawal',
      'amount': 200,
    },
    {
      'accountNo': '003',
      'type': 'deposit',
      'amount': 200,
    },
  ];
  
  var updateBalancesWithTransactions = () => {
      // Implement transaction code here.
      let balanceInfo=transactions.map(displayUpdatedBalances)
      return balanceInfo;
  };
  var displayUpdatedBalances=(balanceInfo)=>{
    let type=balanceInfo.type;
    let accountNo=balanceInfo.accountNo;
    let amount=balanceInfo.amount;
    let balance=balances[balanceInfo.accountNo];
    if(type==="withdrawal"){
      balances[accountNo]=balance-amount;
    }
    else{
      balances[accountNo]=balance+amount;
    }
  }
  var displayBalances = () => {
      // Implement display code here.
      let accountInfo=accounts.map(displayAccBalances)
      console.table(accountInfo);
      return accountInfo;
  };
  var displayAccBalances=(accountInfo)=>{
    let name=accountInfo.name;
    let account=accountInfo.accountNo;
    let obj=[]
    let balance=balances[accountInfo.accountNo];
    obj={
      name,account,balance
    };
    return obj;
  }
  
  // Do not change below this line.
  var main = () => {
      console.log('Balances before transactions');
      displayBalances();
      updateBalancesWithTransactions();
      console.log('Balances after transactions');
      displayBalances();
  }
  
  main();
  