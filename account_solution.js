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
  
  const updateBalancesWithTransactions = () => (transactions.map(calculateBalances))
      // Implement transaction code here.
      
  const calculateBalances=(balanceInfo)=>{
    let accountNo=balanceInfo.accountNo;
    let amount=balanceInfo.amount;
    let balance=balances[accountNo];
    balances[accountNo]=(balanceInfo.type==="withdrawal")?balance-amount:balance+amount;
  }
  const displayBalances = () => (accounts.map(displayAccBalances))
      // Implement display code here.
  
  const displayAccBalances = (accountInfo) => ({name:accountInfo['name'], accountNo:accountInfo['accountNo'], balance:balances[accountInfo['accountNo']]})
  // Do not change below this line.
  const main = () => {
      console.log('Balances before transactions');
      console.table(displayBalances());
      updateBalancesWithTransactions();
      console.log('Balances after transactions');
      console.table(displayBalances());
  }
  
  main();
  