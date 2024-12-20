import { useState } from "react";

export default function Counter(){
    /* 
        State :
            The state is a built-in React object that is used to contain data or information about the Component.
            A component's state can change over time; wheather it changes, the component re-renders.

        Hooks :
            Hooks were a new edition in React 16.8
            They let you use state and other React features without writing a class.
            Different types of Hooks are useState,useEffect,etc.
        
        useState() :
            The React useState Hook allows us to track state in a function component.
            Syntax : const [state, setState] = useState(initialState);
            useState return an array with 2 values:
            1.The current state.During the first render,it will match the initialState that you have passed.
            2.The set function that lets you update the state to a different value and trigger a re-render.
    */
    
    let [count,setCount] = useState(0);

    function incCount() {
        setCount(count + 1);
        // console.log(count);
    }

    return(
        <div>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </div>
    )
}