import './App.css';
import Title from './Title';

/*
      Rules of JSX:
      1]Return a single root element :
          To return multiple elements from a component,wrap them with a single parent tag.
          Ex You can use a <div>
      2]Close all the tags :
          JSX requires tags to be explicitly closed 
          i)self-closing tags like <img> must become <img></img> or <img />
          ii)wrapping tags like <li>oranges must be written as <li>oranges</li>
      3]camelCase all most of the things
          Some HTML attributes are written in camelCase.
          Ex 'class' is a reserved word, in React you have to write 'className' instead of class.
    
      React Fragment :
          Fragments let you group a list of children without adding extra nodes to the DOM.
          <> </>
*/

function App() {
  return(
    <>
      <Title />
      <Title />
      <Title />
    </>
  )
}

export default App
