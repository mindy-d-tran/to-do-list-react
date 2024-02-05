import ToDoItem from "./ToDoItem";

function ToDoList() {
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
        <ToDoItem />
      </form>
    </div>
  );
}

export default ToDoList;
