/* ASSIGNMENT 1:
-------------
You are building a shopping cart summary for an e-commerce website.

Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

Tasks:
    1. Use filter() to get only inStock products
    2. Use map() to create a new array with:  { name, totalPrice }
    3. Use reduce() to calculate grand total cart value
    4. Use find() to get details of "Mouse"
    5. Use findIndex() to find the position of "Keyboard" */

/* ASSIGNMENT 1 */

const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
// 1
let r=cart.filter(item => item.inStock);
console.log("In stock products:",r);
// 2
let r2=cart.map(item => {
  return {
    name: item.name,
    totalPrice: item.price*item.quantity
  };
});
console.log("Product total:",r2);
// 3
let r3=cart.reduce((total, item) => {
  return total + item.price * item.quantity;
}, 0);
console.log("Grand total cart value:", r3);
// 4
let r4=cart.find(item => item.name === "Mouse");
console.log("Mouse details:", r4);
// 5
let r5 = cart.findIndex(item => item.name === "Keyboard");
console.log("Keyboard index:",r5);