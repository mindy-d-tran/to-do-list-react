import { useState } from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ state, dispatch }) {
  const [title, setTitle] = useState("");

  // handle adding a new task to the data
  const handleAddTask = (e) => {
    e.preventDefault();
    dispatch({ type: "addTask", payload: { title } });
    setTitle("");
    console.log(title);
  };

  // updating task whenever there is a change in the text box
  const handleOnChange = (e) => {
    setTitle(e.target.value);
    console.log(state);
  };
  return (
    <div>
      <h2>to do list</h2>

      {/* form to add task to to-do list */}
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Add task"
          onChange={handleOnChange}
          value={title}
        />
        <button>Add</button>
      </form>

      {/* form to check the todo list items */}
      <form onSubmit={(e)=>e.preventDefault()}>
        {state.map((toDoItem) => {
          return (
            <ToDoItem key={toDoItem.id} item={toDoItem} dispatch={dispatch} />
          );
        })}
      </form>
    </div>
  );
}

export default ToDoList;
