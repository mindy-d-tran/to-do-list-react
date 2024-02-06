import { useState } from "react";

function ToDoItem(props) {
  const { item, dispatch } = props;
  const { id, title, completed } = item;

  const [edit, setEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  // updating task whenever there is a change in the text box
  const handleOnChange = (e) => {
    setNewTitle(e.target.value);
    // console.log(state);
  };

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleEditItem = () => {
    dispatch({ type: "handleEdit", payload: {} });
    handleEdit();
  };

  // handle deleting a task from the list
  const handleDeleteTask = () => {
    console.log(id);
    dispatch({ type: "deleteTask", payload: { id } });
  };

  return (
    <div>
      {edit ? (
        <div onClick={handleEditItem}>
          <input type="checkbox" id={id} name={title} value={title} />
          <input
            type="text"
            placeholder="Add task"
            onChange={handleOnChange}
            value={newTitle}
          />
          <button>Save</button>
        </div>
      ) : (
        <>
          <input
            type="checkbox"
            id={id}
            name={title}
            value={title}
            defaultChecked={completed}
          />
          <label>{title}</label>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDeleteTask}>Delete</button>
        </>
      )}
    </div>
  );
}
export default ToDoItem;
