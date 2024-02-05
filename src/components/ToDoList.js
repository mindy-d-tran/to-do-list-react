// import { useState } from "react";
import ToDoItem from "./ToDoItem";

//importing data
import toDoData from "../data/toDo.js";

function ToDoList() {
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
        {toDoData.map((toDoItem) => {
          return <ToDoItem key={toDoItem.id} item={toDoItem} />;
        })}
      </form>
    </div>
  );
}

export default ToDoList;
