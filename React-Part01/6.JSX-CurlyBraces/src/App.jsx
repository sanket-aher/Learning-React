import './App.css';

/*
      JavaScript in JSX with Curly Braces :
        Sometimes you will want to add a little Javascript logic inside that markup(html),
        you can use curly braces in your JSX to open a window to Javascript.
*/

function App() {
  let name = "John Cena";
  return(
    <div>
      <p> 2*2 = {2*2} </p>
      <p> Hi, {name.toUpperCase()} </p>
    </div>
  );
}

export default App
