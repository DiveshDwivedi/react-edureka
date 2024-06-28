/**
 * 241
 */
const {
    filterProductsByCategory,
    calculateTotalSales,
    sortProductsByPrice,
    get_stock_each_product,
    getCustomerPurchaseHistory,
    getCustomerPurchasedProducts,
    get_total_revenue
} = require('./utils');

console.log('Electronics Products:', filterProductsByCategory('Electronics'));

console.log('Total Sales of Product:', calculateTotalSales(1));

console.log('Products Sorted by Price :', sortProductsByPrice()); // ascending order
console.log('Stock of each products :', get_stock_each_product());

console.log('Purchase History for Customer ID 1:', getCustomerPurchaseHistory(1));

console.log('Purchased Product History of Customer ID 2:', getCustomerPurchasedProducts(2));

// get total revenue

console.log('Get total reevnue of products :', get_total_revenue());
