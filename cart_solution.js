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
  var getDiscountPercent = function (productName) {
    let discount=discounts[productName];
    let discountPercent=(discount>0)?(discount/100):0;
    return discountPercent;
  };
  
  var getTaxPercent = function (productName) {
    let tax=taxes[productName];
    let taxPercent=(tax>0)?(tax/100):0;
    return taxPercent;
  };
  
  var getUnitPrice = function (itemName) {
    let unitPrice=rates[itemName];
    let discountPercent=getDiscountPercent(itemName);
    let itemDiscountedPrice=unitPrice*discountPercent;
    let discountedPrice=unitPrice-itemDiscountedPrice;
    let taxPercent=getTaxPercent(itemName);
    let taxPrice=discountedPrice*taxPercent;
    let finalPrice=discountedPrice+taxPrice;
    return finalPrice;
  };
  
  var getLineItemPrice = function (lineItem) {
    let itemName=lineItem['item'];
    let unit=lineItem['units'];
    let unitPrice=getUnitPrice(itemName);
    let totalUnitsPrice=unitPrice*unit;
    let itemPrice={
        'price': totalUnitsPrice,
        'item': itemName,    
    };
    return itemPrice;
  };
  
  var getSum = function () {
    lineItemPrice=purchases.map(getLineItemPrice)
      console.table(lineItemPrice);
  };
  
  // Do not change below this line.
  /* Main Function */
  var main = function main() {
    getSum();
  }
  main();