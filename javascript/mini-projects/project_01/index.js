const {
    filterProductsByCategory,
    calculateTotalSales,
    sortProductsByPrice,
    getCustomerPurchaseHistory
} = require('./utils');

console.log('Electronics Products:', filterProductsByCategory('Electronics'));

console.log('Total Sales of Product:', calculateTotalSales(1));

console.log('Products Sorted by Price :', sortProductsByPrice()); // ascending order

// console.log('Purchase History for Customer ID 1:', getCustomerPurchaseHistory(1));
