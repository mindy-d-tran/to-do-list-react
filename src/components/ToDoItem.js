function ToDoItem(props) {
  const { id, title, completed } = props.item;
  return (
    <div>
      <input type="checkbox" id={id} name={title} value={title} defaultChecked={completed} />
      <label>{title}</label>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}
export default ToDoItem;
