<<<<<<< HEAD
//8. Write a function that receives an array & search element as args and returns the index of that search element in the array. It should return "not found" when search element not found.
function search(array, elem) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elem) {
      return i;  
    }
  }
  return "not found";  
}
=======
//8. Write a function that receives an array & search element as args and returns the index of that search element in the array. It should return "not found" when search element not found.
function search(array, elem) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elem) {
      return i;  
    }
  }
  return "not found";  
}
>>>>>>> 555dabf37545356cc9042d7c760c20490f4df6ff
console.log(search([90, 78, 87, 76, 100],99));