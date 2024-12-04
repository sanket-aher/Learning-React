import './App.css';
import Joker from './Joker';

/*
  useEffect() :
        The useEffect Hook allows you to perform side effects in your components.
        Some examples of side effects are: fetching data, directly updating the DOM, and timers.
        useEffect accepts two arguments. The second argument is optional.
          Syntax : useEffect(<function>, <dependency>)
*/

function App() {
  return (
    <>
      <Joker />
    </>
  )
}

export default App
