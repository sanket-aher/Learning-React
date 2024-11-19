import './App.css';
import Lottery from './Lottery.jsx';
import { sum } from "./helper";


function App() {

  /*
    Function as Props :
        JS Functions are 1st class objects i.e they can be passed to a function as argument, returned from it and assigned to a variable.
  */
  let winCondition1 = (ticket) =>{
    return sum(ticket) === 15;
  }

  let winCondition2 = (ticket) =>{
    return ticket.every((num) => num === ticket[0]);
  }

  let winCondition3 = (ticket) =>{
    return ticket[0] === 0;
  }

  

  return (
    <>
      <Lottery n={3} winCondition={winCondition1}  />
    </>
  )
}

export default App
