import './App.css';

//importing data
import {initialState} from "./data/toDo.js";

//importing components
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <h1>To Do App</h1>
      <ToDoList initialState={initialState} />
    </div>
  );
}

export default App;
