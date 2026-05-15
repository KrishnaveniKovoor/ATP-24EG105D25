# Week 2: JavaScript Array Methods and Object-Oriented Programming

## Overview
This week covers JavaScript Array Methods and Object-Oriented Programming concepts with practical implementations using real-world scenarios.

## Topics Covered
- Array Methods: `filter()`, `map()`, `reduce()`, `find()`, `findIndex()`
- Classes and Objects in JavaScript
- Object-Oriented Programming Concepts
- Data Manipulation with Arrays and Objects
- CRUD Operations on Arrays
- Method Implementation in Classes
## Files and Descriptions

### Array Methods Applications

- **`bankTransaction.js`**
  - Bank transaction analysis using array methods
  - Filters credit transactions
  - Extracts transaction amounts using `map()`
  - Calculates account balance using `reduce()`
  - Finds first debit transaction
  - Locates specific transactions

- **`employeePayroll.js`**
  - Employee data processing and payroll management
  - Filters employees by department using `filter()`
  - Calculates net salary (salary + 10%) using `map()`
  - Computes total salary payout using `reduce()`
  - Finds employees by salary criteria
  - Locates employees by name using `findIndex()`

- **`movieRecommendation.js`**
  - Movie recommendation system
  - Filters movies by genre (Sci-Fi, Drama, Action)
  - Maps movies to formatted title with rating display
  - Calculates average movie rating using `reduce()`
  - Finds specific movies by title
  - Locates movie positions in array

- **`shoppingCart.js`**
  - E-commerce shopping cart management
  - Filters in-stock products using `filter()`
  - Creates product array with names and total prices using `map()`
  - Computes grand total cart value using `reduce()`
  - Finds specific items like "Mouse"
  - Locates product positions using `findIndex()`

- **`studentPerformance.js`**
  - Student performance dashboard and analysis
  - Filters passing students (marks ≥ 40)
  - Assigns grades based on marks (A: ≥90, B: ≥75, C: ≥60, D: else)
  - Calculates average marks using `reduce()`
  - Finds students by specific scores
  - Locates students by name

### Object-Oriented Programming

- **`booksDetails.js`**
  - Book class implementation
  - Properties: title, author, pages, availability status
  - Methods:
    - `borrowBook()` - Mark book as borrowed
    - `returnBook()` - Mark book as returned
    - `displayInfo()` - Display book information

- **`LibraryBookManagement.js`**
  - Library Book Management System
  - Complete Book class with constructor
  - Properties:
    - title (string)
    - author (string)
    - pages (number)
    - isAvailable (boolean, default: true)
  - Methods:
    - `borrow()` - Borrow a book
    - `returnBook()` - Return a book
    - `getInformation()` - Get book details

## Directory Structure

```
Week-2/
├── bankTransaction.js
├── booksDetails.js
├── employeePayroll.js
├── LibraryBookManagement.js
├── movieRecommendation.js
├── shoppingCart.js
├── studentPerformance.js
├── E_Commerce/          (Sub-project)
├── Task_Management/     (Sub-project)
└── README.md
```

## How to Run

Execute the JavaScript files using Node.js:

```bash
# Array Methods Examples
node bankTransaction.js
node employeePayroll.js
node movieRecommendation.js
node shoppingCart.js
node studentPerformance.js

# Object-Oriented Programming
node booksDetails.js
node LibraryBookManagement.js
```

## Learning Outcomes

After completing this week, you should be able to:

✅ Use array methods (`filter()`, `map()`, `reduce()`, `find()`, `findIndex()`)  
✅ Apply these methods to real-world problem scenarios  
✅ Create and use classes in JavaScript  
✅ Implement methods within classes  
✅ Manipulate data structures efficiently  
✅ Solve complex problems using functional programming concepts  
✅ Build object-oriented solutions for data management