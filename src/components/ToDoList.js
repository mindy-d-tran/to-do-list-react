// import { useState } from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({initialState}) {
//   const [newTask, setNewTask] = useState("");

//   const handleChange = (e) => {
//     e.prevendDefault();
//   };

  return (
    <div>
      <h2>to do list</h2>

      {/* form to add task to to-do list */}
      <form>
        <input type="text" placeholder="Add task" />
        <button>Add</button>
      </form>

      {/* form to check the todo list items */}
      <form>
        {initialState.map((toDoItem) => {
          return <ToDoItem key={toDoItem.id} item={toDoItem} />;
        })}
      </form>
    </div>
  );
}

export default ToDoList;
