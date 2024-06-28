const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 999.99, stock: 25 },
    { id: 2, name: "Smartphone", category: "Electronics", price: 699.99, stock: 50 },
    { id: 3, name: "Desk Chair", category: "Furniture", price: 149.99, stock: 75 },
    { id: 4, name: "Bluetooth Headphones", category: "Electronics", price: 199.99, stock: 40 },
    { id: 5, name: "Coffee Table", category: "Furniture", price: 89.99, stock: 20 },
];

const sales = [
    { saleId: 1, productId: 1, quantity: 2, saleDate: "2023-05-15" },
    { saleId: 2, productId: 3, quantity: 1, saleDate: "2023-05-16" },
    { saleId: 3, productId: 2, quantity: 3, saleDate: "2023-05-17" },
    { saleId: 4, productId: 4, quantity: 1, saleDate: "2023-05-18" },
    { saleId: 5, productId: 5, quantity: 2, saleDate: "2023-05-19" },
];

const customers = [
    { customerId: 1, name: "Alice Johnson", age: 30, gender: "Female", purchaseHistory: [1, 3] },
    { customerId: 2, name: "Bob Smith", age: 45, gender: "Male", purchaseHistory: [2, 4] },
    { customerId: 3, name: "Carol White", age: 28, gender: "Female", purchaseHistory: [1, 5] },
    { customerId: 4, name: "David Brown", age: 35, gender: "Male", purchaseHistory: [3, 4, 5] },
    { customerId: 5, name: "Eva Green", age: 40, gender: "Female", purchaseHistory: [2, 1] },
];

module.exports = { products, sales, customers };


