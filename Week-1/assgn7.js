//8. Write a function that receives an array & search element as args and returns the index of that search element in the array. It should return "not found" when search element not found.
function search(array, elem) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elem) {
      return i;  
    }
  }
  return "not found";  
}
console.log(search([90, 78, 87, 76, 100],99));