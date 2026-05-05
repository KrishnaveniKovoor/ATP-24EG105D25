//ASSIGNMENT 3
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
//1 
let k=employees.filter((emp)=>emp.department==="IT");
console.log("employees from IT department are:", k);
//2 
let k2=employees.map((emp) => {
  return { ...emp, netSalary: emp.salary + emp.salary * 0.1 };
});
console.log("employees with net salary:", k2);
//3 
let k3=employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log("total salary payout:", k3);
//4
let k4=employees.find((emp) => emp.salary === 30000);
console.log("employee with salary 30000:", k4);
//5 
let k5=employees.findIndex((emp) => emp.name === "Neha");
console.log("index of Neha:", k5);