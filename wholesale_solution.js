// Compute final price for an item
// Get unit price
// Compute item discount
// Compute tax on item
// Compute final price

// Compute the price for a lineItem.

// Sum the final price of all the lineItems.

var UnitPrices = {
  Carrot: 10,
  Apple: 200,
  Guava: 50,
};

var Discounts = {
  // values are percentages
  Apple: 10,
};

var Taxes = {
  // values are percentages
  Carrot: 5,
  Guava: 10,
};

var Bills = [
  [
    {
      item: 'Carrot',
      units: 200,
    },
    {
      item: 'Apple',
      units: 150,
    },
    {
      item: 'Guava',
      units: 40,
    },
  ],
  [
    {
      item: 'Carrot',
      units: 20,
    },
  ],
  [
    {
      item: 'Apple',
      units: 30,
    },
    {
      item: 'Guava',
      units: 80,
    },
  ]
];

var PaymentsMade = [
  10000,
  3000,
  7500,
]

/* Programme */
var PendingPayments = [
  // Compute the payments for every bill and add it here.
];
var payableAmount = [];
const getDiscountPercent = (productName) => (Discounts[productName]/100 || 0); 
const getTaxPercent = (productName) => (Taxes[productName]/100 || 0); 

const getUnitPrice = (itemName) => {
  let unitPrice = UnitPrices[itemName];
  let itemDiscountedPrice = unitPrice * getDiscountPercent(itemName);
  let discountedPrice = unitPrice - itemDiscountedPrice;
  let taxPrice = discountedPrice * getTaxPercent(itemName);
  let finalPrice = discountedPrice + taxPrice;
  return finalPrice;
};
const getSum = (eachBillsItem) => {
  let itemName = eachBillsItem['item'];
  let totalUnitsPrice = getUnitPrice(itemName) * eachBillsItem['units'];
  let billObj = {};
  let sum = 0;
  sum = sum + totalUnitsPrice;
  billObj = {
    item: itemName,
    amount: sum,
  }
  return billObj;
}
const getBillsArray = (billsArray) => {
  let eachBillsItem = billsArray.map(getSum);
  let billsTotalAmount = (eachBillsItem.map(item => item.amount)).reduce((total, amount) => total + amount);
  payableAmount.push(billsTotalAmount);
  // Print bill details
  return eachBillsItem;
}
const billsItemArray = () => (Bills.map(getBillsArray));

const diffNumber = (payableAmount, PaymentsMade) => payableAmount.map(function (num, idx) {
  let difference = num - PaymentsMade[idx];
  let amountDifference = (difference >= 0) ? "Pending Amount " + difference : "Deposit Amount " + (difference * (-1));
  return amountDifference;
});
const calculatePendingAmount = () => {
  let paymentBillsObj = {
    Advanced_Deposit: PaymentsMade,
    Bill_Amount: payableAmount,
    Pending_Amount: (diffNumber(payableAmount, PaymentsMade))
  }
  return paymentBillsObj;
}
const main = () => {
//billsItemArray();
billsItemArray().map((bill) => console.table(bill));
console.table(calculatePendingAmount());
}
main();