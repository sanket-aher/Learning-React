import './App.css';
import Form from './Form';

/*    
    Handling Multiple Inputs :
        We create a common handleInputChange() for all elements.
        event.target.name  (changes field)
        event.target.value (new value of the field)
*/

function App() {
  return (
    <>
      <Form />
    </>
  )
}

export default App;
