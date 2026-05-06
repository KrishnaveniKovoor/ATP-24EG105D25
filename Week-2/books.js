class Book {
  constructor(title, author, pages, available = true) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.available = available;
  }

  borrowBook() {
    if (this.available) {
      this.available = false;
    }
  }

  returnBook() {
    this.available = true;
  }

  displayInfo() {
    console.log(
      this.title + " by " + this.author + 
      "Pages:" + this.pages + 
      " Available:" + this.available
    );
  }
}
let b1 = new Book("Harry Potter", "J.K. Rowling", 350);
let b2 = new Book("1984", "George Orwell", 328);
let b3 = new Book("The Hobbit", "J.R.R. Tolkien", 310);
let b4 = new Book("The Alchemist", "Paulo Coelho", 200);
let b5 = new Book("Atomic Habits", "James Clear", 320);

let books = [b1, b2, b3, b4, b5];
// 1
console.log("All Books:");
books.forEach(b => b.displayInfo());
//2
b1.borrowBook();
b3.borrowBook();

console.log("\nAfter borrowing two books:");
books.forEach(b => b.displayInfo());


// 3
b1.returnBook();

console.log("\nAfter returning one book:");
books.forEach(b => b.displayInfo());
// 4
let longCount = books.filter(b => b.pages > 300).length;
console.log("\nNumber of long books:", longCount);
//5
let availableBooks = books.filter(b => b.available);
console.log("\nAvailable books:");
availableBooks.forEach(b => console.log(b.title));