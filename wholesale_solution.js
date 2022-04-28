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
var payableAmount=[];
const getDiscountPercent = (productName) => {
  let discount = Discounts[productName];
  let discountPercent = (discount > 0) ? (discount / 100) : 0;
  return discountPercent;
};

const getTaxPercent = (productName) => {
  let tax = Taxes[productName];
  let taxPercent = (tax > 0) ? (tax / 100) : 0;
  return taxPercent;
};
const getUnitPrice = (itemName) => {
  let unitPrice = UnitPrices[itemName];
  let discountPercent = getDiscountPercent(itemName);
  let itemDiscountedPrice = unitPrice * discountPercent;
  let discountedPrice = unitPrice - itemDiscountedPrice;
  let taxPercent = getTaxPercent(itemName);
  let taxPrice = discountedPrice * taxPercent;
  let finalPrice = discountedPrice + taxPrice;
  return finalPrice;
};
const getSum = (eachBillsItem) => {
  let itemName = eachBillsItem['item'];
  let unit = eachBillsItem['units'];
  let unitPrice = getUnitPrice(itemName);
  let totalUnitsPrice = unitPrice * unit;
  let billObj={};
  let sum = 0;
  sum = sum + totalUnitsPrice;
  billObj={
    item:itemName,
    amount:sum,
  }
  return billObj;
}
const getBillsArray = (billsArray) => {
  let eachBillsItem = billsArray.map(getSum);
  let billsTotalAmount=(eachBillsItem.map(item=>item.amount)).reduce((total,amount)=>total+amount);
  payableAmount.push(billsTotalAmount);
  console.table(eachBillsItem);
}
const billsItemArray = () => {
  let billsArray = Bills.map(getBillsArray);
}
const diffNumber = (arr1, arr2) => arr1.map(function (num, idx) { return num- arr2[idx] });
const calculatePendingAmount=()=>{
let PendingPayment=(diffNumber(payableAmount,PaymentsMade))
let paymentBillsObj={
  Advanced_Deposit: PaymentsMade,
  Bill_Amount: payableAmount,
  Pending_Amount:PendingPayment
}
console.table(paymentBillsObj);
}
billsItemArray();
calculatePendingAmount();