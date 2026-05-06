//6. Write a function that receives 3 number args and return the big number
function biggest(a,b,c){
    if(a>b && a>c){
        console.log("a is biggest");
    }
    else if(b>a && b>c){
        console.log("b is biggest");
    }
    else{
        console.log("cis biggest");
    }
}
biggest(200,700,600);

