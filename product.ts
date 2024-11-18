// Task 4: TypeScript Product Interface and Total Price Calculation

// Define the Product interface
interface Product {
    name: string;
    price: number;
}

// Function to calculate total price of products
function calculateTotalPrice(products: Product[]): number {
    return products.reduce((total, product) => total + product.price, 0);
}

// Example usage
const products: Product[] = [
    { name: "Apple", price: 1.2 },
    { name: "Banana", price: 0.8 },
    { name: "Orange", price: 1.5 },
];

console.log(`Total Price: $${calculateTotalPrice(products).toFixed(2)}`);

// Task 5: Email Validation Function
function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Example usage
console.log(isValidEmail("example@domain.com")); // true
console.log(isValidEmail("invalid-email")); // false
