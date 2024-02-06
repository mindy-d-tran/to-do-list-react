function ToDoItem(props) {
  const { item, dispatch } = props;
  const { id, title, completed } = item;

  // handle deleting a task from the list
  const handleDeleteTask = () => {
    console.log(id);
    dispatch({ type: "deleteTask", payload: { id } });
  };

  return (
    <div>
      <input
        type="checkbox"
        id={id}
        name={title}
        value={title}
        defaultChecked={completed}
      />
      <label>{title}</label>
      <button id={id}>Edit</button>
      <button onClick={handleDeleteTask}>Delete</button>
    </div>
  );
}
export default ToDoItem;
