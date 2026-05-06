//ASSIGNMENT 4
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

//1 
let k = movies.filter((m) => m.genre === "Sci-Fi");
console.log("Sci-Fi movies:", k);

//2 
let k2 = movies.map((m) => `${m.title} (${m.rating})`);
console.log("movie titles with ratings:", k2);

//3 
let k3 =
  movies.reduce((sum, m) => sum + m.rating, 0) / movies.length;

console.log("average movie rating:", k3);
//4 
let k4 = movies.find((m) => m.title === "Joker");
console.log("movie Joker details:", k4);
//5 
let k5 = movies.findIndex((m) => m.title === "Avengers");
console.log("index of Avengers:", k5);