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

/**
 * get current stocks of products
 */
const get_stock_each_product = () => {
    return products.map((product) => product.stock)
}

/**
 * Get customer purchase history
 */
const getCustomerPurchaseHistory = (customer_id) => {
    return customers.find(customer => customer.customerId === customer_id)
}

/**
 * get customer purchased Product from history
 * @param {*} customer_id 
 * @returns object|undefined
 */
const getCustomerPurchasedProducts = (customer_id) => {
    const { purchaseHistory } = (getCustomerPurchaseHistory(customer_id) != undefined) ? getCustomerPurchaseHistory(customer_id) : {};

    if (purchaseHistory != undefined) {
        let purchased_product_details = [];
        for(const values of purchaseHistory) {
            purchased_product_details.push(products.find(product => product.id === values));
        }

        return purchased_product_details;
    }

    return undefined;
}

module.exports = {
    filterProductsByCategory,
    calculateTotalSales,
    sortProductsByPrice,
    get_stock_each_product,
    getCustomerPurchaseHistory,
    getCustomerPurchasedProducts
};

