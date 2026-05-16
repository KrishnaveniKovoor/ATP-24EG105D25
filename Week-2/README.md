# Week 2: JavaScript Array and Object Practice

## Overview
This week focuses on fundamental JavaScript programming patterns, including array iteration methods, rest/spread operators, object cloning, and basic object-oriented design. The exercises are designed to build confidence by solving practical problems using the latest JavaScript syntax.

## Topics Covered
- Array Methods: `filter()`, `map()`, `reduce()`, `find()`, `findIndex()`
- Rest and spread syntax for arrays and objects
- Shallow vs deep copy behavior
- Classes and constructor methods in JavaScript
- Timers and asynchronous simulation with `setInterval()` / `setTimeout()`
- Basic module import/export with ES modules

## Files and Descriptions

### Array Methods and Utility Exercises

- **`bankTransaction.js`**
  - Analyze bank transactions with array methods
  - Filter credit entries and calculate amounts
  - Compute a final balance with `reduce()`
  - Search for debit transactions and find indexes

- **`employeePayroll.js`**
  - Process employee payroll data
  - Filter staff by department, compute net salary, and aggregate totals
  - Find employee records by salary or name

- **`movieRecommendation.js`**
  - Build a movie recommendation summary
  - Filter by genre, format movie titles, and average ratings
  - Locate movie details using `find()` and `findIndex()`

- **`shoppingCart.js`**
  - Simulate a shopping cart summary
  - Get in-stock items, calculate item totals, and compute grand total
  - Find specific products and identify their positions

- **`studentPerformance.js`**
  - Evaluate student results with grade assignment
  - Filter passing students and add grade metadata
  - Compute average marks and find target students

- **`restParameterQ4.js`**
  - Use rest parameters to accept a variable number of arguments
  - Sum all passed values using `reduce()`

- **`copyExtendArrayQ2.js`**
  - Extend arrays using spread syntax
  - Clone objects and add new properties cleanly

- **`shallowCopyQ5.js`**
  - Demonstrate shallow copy behavior with object spread
  - Observe how nested objects remain linked after cloning

- **`deepCopyQ6.js`**
  - Create an independent deep copy of an object
  - Modify the copied object without affecting the original

- **`otpCountdownSimulatorQ8.js`**
  - Simulate an OTP countdown flow
  - Use `setInterval()` to update the timer and allow resending after completion

- **`examPortalSimulatorQ7.js`**
  - Simulate exam submission feedback messages
  - Use delayed logging via `setTimeout()` for sequential updates

- **`updateUserObjectQ3.js`**
  - Copy object properties to a new object
  - Add additional fields while preserving the original object

### Object-Oriented Programming

- **`booksDetails.js`**
  - Define a `Book` class with properties and methods
  - Implement borrowing, returning, and info display behavior

- **`LibraryBookManagement.js`**
  - Implement a library book management example
  - Work with class methods, availability state, and long-book detection

### Modules

- **`module1.js`**
  - Export data, object, and string values using named exports

- **`module2.js`**
  - Import values from `module1.js` and log them

## Directory Structure

```
Week-2/
├── bankTransaction.js
├── booksDetails.js
├── copyExtendArrayQ2.js
├── deepCopyQ6.js
├── employeePayroll.js
├── examPortalSimulatorQ7.js
├── LibraryBookManagement.js
├── module1.js
├── module2.js
├── movieRecommendation.js
├── otpCountdownSimulatorQ8.js
├── restParameterQ4.js
├── shallowCopyQ5.js
├── shoppingCart.js
├── studentPerformance.js
├── updateUserObjectQ3.js
├── E_Commerce/          (Sub-project)
├── Task_Management/     (Sub-project)
└── README.md
```

## How to Run

Run the JavaScript files with Node.js:

```bash
node bankTransaction.js
node employeePayroll.js
node movieRecommendation.js
node shoppingCart.js
node studentPerformance.js
node booksDetails.js
node LibraryBookManagement.js
node restParameterQ4.js
node copyExtendArrayQ2.js
node shallowCopyQ5.js
node deepCopyQ6.js
node otpCountdownSimulatorQ8.js
node examPortalSimulatorQ7.js
node updateUserObjectQ3.js
```

## Learning Outcomes



- Apply array helper methods to solve data-processing tasks
- Use rest/spread syntax to clone and extend arrays/objects
- Distinguish between shallow and deep copies in JavaScript
- Build simple classes with constructors and instance methods
- Simulate asynchronous behavior with timers
- Organize code using ES modules and named exports
- Convert real-world problem statements into executable JavaScript code
