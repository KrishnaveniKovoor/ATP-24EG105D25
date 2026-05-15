//Problem Statement: Library Book Management System
//-------------------------------------------------
//Objective : Create a Book class and use it to manage a collection of books in a library.

//Requirements:
  // Create a Book class with the following:

  /*Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)*/
 class Book{
    constructor(title,author,pages,isAvailable=true){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.isAvailable=isAvailable;
}
    

borrow(){
 this.isAvailable=false;
}
returnBook(){
 this.isAvailable=true;
}
getInformation(){
   return 'Name:'+this.title 
   'Author:'+ this.author
   'Pages:'+this.pages;
}
isLongBook(){
      return this.pages>300;
}
 }
 /*  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise*/

let b1=new Book('krish','krish',89);
let b2=new Book('Harry Potter','qmarsaljoe',89);
let b3=new Book('1984','RK',78);
let b4=new Book('The Hobbit','Jai',980);
let b5=new Book('Jacky HA-HA','Yash',678);

console.log(b1.getInformation());
console.log(b2.getInformation());
console.log(b3.getInformation());
console.log(b4.getInformation());
console.log(b5.getInformation());


console.log(b4.isLongBook());
console.log(b5.isLongBook());

/* 1. Create at least 5 book objects using the class:
      Example: "Harry Potter", "1984", "The Hobbit", etc.*/


/* 2. Perform the following operations:

      i. Display info of all books
      ii. Borrow 2 books and show their availability status
      iii. Return 1 book and show updated status
      iv. Count how many books are "long books" (more than 300 pages)
      v. List all available books */

b1.borrow();
b2.borrow();

console.log("b1 availability:",b1.isAvailable);
console.log("b2 availability:",b2.isAvailable);

b1.returnBook();
console.log("b1 availability after return:",b1.isAvailable);

let books=[b1,b2,b3,b4,b5];
let longCount=0;

for(let b of books){
    if(b.isLongBook()){
        longCount++;
    }
}

console.log("Number of long books:",longCount);

console.log("Available books:");
for(let b of books){
    if(b.isAvailable){
        console.log(b.title);
    }
}