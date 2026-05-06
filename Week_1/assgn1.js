const employees = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  },
];


employees.splice(1, 0, {
  eno: 106,
  name: "Riya",
  marks: [89, 69, 90],
});


const indexKiran = employees.findIndex(emp => emp.name === "Kiran");
if (indexKiran !== -1) {
  employees.splice(indexKiran, 1);
}


const sneha = employees.find(emp => emp.name === "Sneha");
if (sneha) {
  sneha.marks[sneha.marks.length - 1] = 75;
}


console.log(employees);