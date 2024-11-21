import './App.css';
import Form from './Form';

/*    
      Forms in React :
          The standard way with Forms is to use 'Controlled Components'.So we make React state to be the 'single source of truth'.

          An input form element whose value is controlled by React state is called a 'Controlled Component'.

      Labels in React :
          In html, we use in 'for' attribute in <label /> tag instead of that use 'htmlFor' attribute in React.
*/

function App() {
  return (
    <>
      <Form />
    </>
  )
}

export default App;
