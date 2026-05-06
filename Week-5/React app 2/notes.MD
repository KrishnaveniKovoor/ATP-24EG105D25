import {useState} from "react";
function Counter(){
    //state
    const [count,setCount] = useState(0);//[state,function to modify state]
    //functions to modify the state
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount = () => {
            setCount(count-1);
        };
        console.log("counter component");[[]]
    }

}