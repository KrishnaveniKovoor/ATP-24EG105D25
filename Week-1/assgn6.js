<<<<<<< HEAD
//7. Write a function that receives an array as arg and return their sum
function sum(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total; 
}
let result = sum([78, 99, 50, 65, 78]);
=======
//7. Write a function that receives an array as arg and return their sum
function sum(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total; 
}
let result = sum([78, 99, 50, 65, 78]);
>>>>>>> 555dabf37545356cc9042d7c760c20490f4df6ff
console.log("The sum of array is:",result);