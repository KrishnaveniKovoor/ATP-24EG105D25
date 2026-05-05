
//5. Find the smallest element in marks array
let arr=[90,70,50,47,80];
let temp=arr[0];
for(let i=0;i<arr.length;i++){
if(arr[i]<temp){
    temp=arr[i];
}
}
console.log("the smallest element in the array is:",temp);