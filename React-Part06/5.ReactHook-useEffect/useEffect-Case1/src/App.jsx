import './App.css';
import Counter from './Counter';

/*
    useEffect() :
      The useEffect Hook allows you to perform side effects in your components.
      Some examples of side effects are: fetching data, directly updating the DOM, and timers.
      useEffect accepts two arguments. The second argument is optional.
        Syntax : useEffect(<function>, <dependency>)

      Case 1 : No dependency passed 
        useEffect(()=>{
            // Runs on every render
        })
*/

function App() {
  return (
    <>
      <Counter />
    </>
  )
}

export default App
