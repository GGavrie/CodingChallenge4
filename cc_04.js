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


// Task 2 Sales Report
// Decleared array of sales
let sales = [1000, 2000, 3000, 4000, 5000];
let totalSales = 0;

//  add up the total sales
for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i];
}

console.log(`Total sales: $${totalSales}`);


// Task 3 Inventory Depletion
// Decleared array of inventory
let stock = 10;

// While loop to decrement the stock
while (stock > 0) {
    console.log(`Current stock: ${stock}`);
    stock--;
}

console.log(`Total sales: $${totalSales}`);


// Task 4 Customer Survey 
// Decleared array of customer survey
console.log(`Current stock: ${stock}`);
stock--;

let responses = 0;

do {
responses++;
console.log(`Response count: ${responses}`);
} while (responses < 3);


// Task 5
// Decleared array of employee performance
let employee2 = { name: "Alice", position: "Manager", salary: 75000 };

for (let property in employee2) {
    console.log(`${property}: ${employee2[property]}`);
}