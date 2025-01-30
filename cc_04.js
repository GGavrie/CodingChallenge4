// Task1 Customer Discounts
// Decleared purchase amount
let purchaseAmount = 1000;
let finalAmount;

// If the purchase  is > than 100, then the final amount is the purchase amount minus 20
if (purchaseAmount > 100) {
    finalAmount = purchaseAmount - 20;
} else {
    finalAmount = purchaseAmount;
}

console.log(`Final amount after discount: $${finalAmount}`);
