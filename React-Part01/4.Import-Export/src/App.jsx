import './App.css';
import Title  from './Title';
import { Description } from './Description';

/* 
        1)Default import-export 
          Import Title from './Title.jsx';
          export default Title;
    -->
    <!-- 
        2)Named import-export
          import {Description} from './Description.jsx';
          export {Description};
    -->
    <!-- In short , named exports are useful when you want to export multiple values and import them with their specific names,
                    while default exports are handy for exporting a single value and giving it a custom name when importing.
                    The choice between the two depends on the structure and requirements of your codebase.    */

function App() {
  return (
    <div>
      <Title />
      <Description />
      <Title />
      <Description />
    </div>
  )
}

export default App
