import './App.css';
import Task1 from './Task1.js';
import First from './Task2.js';
import { Second,Third,Fourth } from './Task2.js';
import First1 from './Task3.js';
import { Second1,Third1,Fourth1 } from './Task3.js';
import StudentFunction from './StudentFunction.js';
import StudentClass from './StudentClass.js';
import Display from './Display.js';
import Task6 from './Task6.js';
function App() {
  return (
      <div>
      Task1: 
      <Task1 />
      Task2:
      <First />
      <Second />
      <Third />
      <Fourth />
      Task3:
      <First1 />
      <Second1 />
      <Third1 />
      <Fourth1 />
      Task4:
      <StudentFunction name="Priya" address="Mzp" scores="90" />
      <StudentClass />
      Task5:
      <Display name="Priya" address="mzp" />
      Task6:
      <Task6 />
      </div>    
  )
}

export default App;
