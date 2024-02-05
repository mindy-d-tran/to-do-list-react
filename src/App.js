import './App.css';
import { useReducer} from 'react';

//importing data
import {initialState} from "./data/toDo.js";

//importing components
import ToDoList from './components/ToDoList';
import reducer from './reducers/toDoReducers.js';

function App() {
  const [todos, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>To Do App</h1>
      <ToDoList state={todos} dispatch={dispatch} />
    </div>
  );
}

export default App;
