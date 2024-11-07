import { useState } from "react";

function init(){
    console.log('init was executed');
    return Math.random();
}

export default function Counter(){
    
    let [count,setCount] = useState(init); //initialization
    console.log('component was rendered');

    function incCount() {
        // setCount(count + 1);
        // setCount(count + 1);

        /* Note : Here we call setCount to update it twice times but in output it is updated only once, to overcome use callback function inside that setCount updater. */

        setCount( (currCount) =>{
            return currCount + 1;
        });
        setCount( (currCount) =>{
            return currCount + 1;
        });

    }

    return(
        <div>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </div>
    )
}