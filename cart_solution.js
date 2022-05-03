// ---------------------------

// Problem 1 - Print the total price for the following items.
// ---------------------------

// Break-up
// Compute final price for an item
// Get unit price
// Compute item discount
// Compute tax on item
// Compute final price

// Compute the price for a lineItem. Note: Every purchase will have a lineItem in the bill.

// Sum the final price of all the lineItems.

/* Data */
var rates = {
  Carrot: 10,
  Apple: 200,
  Guava: 50,
};

var discounts = {
  // values are in percentages.
  Apple: 10,
};

var taxes = {
  // values are in percentages.
  Carrot: 5,
  Guava: 10,
};

var purchases = [
  {
    item: 'Carrot',
    units: 20,
  },
  {
    item: 'Apple',
    units: 2,
  },
  {
    item: 'Guava',
    units: 1,
  },
];

/* Functions */
const getDiscountPercent = (productName) => { return (discounts[productName]/100 || 0); };

const getTaxPercent = (productName) => {return (taxes[productName]/100 || 0); };

const getUnitPrice = (itemName) => {
  let unitPrice = rates[itemName];
  let discountPercent = getDiscountPercent(itemName);
  let itemDiscountedPrice = unitPrice * getDiscountPercent(itemName);
  let discountedPrice = unitPrice - itemDiscountedPrice;
  let taxPercent = getTaxPercent(itemName);
  let taxPrice = discountedPrice * taxPercent;
  let finalPrice = discountedPrice + taxPrice;
  return finalPrice;
};

const getLineItemPrice = (lineItem) => {
  let itemName = lineItem['item'];
  let unit = lineItem['units'];
  let unitPrice = getUnitPrice(itemName);
  let totalUnitsPrice = unitPrice * unit;
  let itemPrice = {
    'price': totalUnitsPrice,
    'item': itemName,
  };
  return itemPrice;
};

const getSum = () => {
  let lineItemPrice = purchases.map(getLineItemPrice)
  let sum = 0;
  sum=(lineItemPrice.map(item=>item.price)).reduce((total,price)=>total+price);
  console.log("Total Sum : " + sum);
  console.table(lineItemPrice);
};

// Do not change below this line.
/* Main Function */
const main = () => {
  getSum();
}
main();