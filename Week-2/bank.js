//ASSIGNMENT 5
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

//1
let k = transactions.filter((t) => t.type === "credit");
console.log("credit transactions:", k);

//2 
let k2 = transactions.map((t) => t.amount);
console.log("transaction amounts:", k2);

//3 
let k3 = transactions.reduce((balance, t) => {
  if (t.type === "credit") {
    return balance + t.amount;
  } else {
    return balance - t.amount;
  }
}, 0);

console.log("final account balance:", k3);
//4
let k4 = transactions.find((t) => t.type === "debit");
console.log("first debit transaction:", k4);
//5 
let k5 = transactions.findIndex((t) => t.amount === 10000);
console.log("index of transaction 10000:", k5);