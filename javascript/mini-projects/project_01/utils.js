const { products, sales, customers } = require('./data');

// Filter products by category
const filterProductsByCategory = (category) => {
    return products.filter(product => product.category === category);
}

// Calculate total sales for a product
const calculateTotalSales = (product_id) => {
    return sales
        .filter(product => product.id === product_id)
        .reduce((total, sale) => total + sale.quantity, 0);
}

// Sort products by price

const sortProductsByPrice = () => {
    return products.sort((a,b) => a.price - b.price);
}
// Get customer purchase history


module.exports = {
    filterProductsByCategory,
    calculateTotalSales,
    sortProductsByPrice,
    // getCustomerPurchaseHistory,
};

