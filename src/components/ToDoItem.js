import { useState } from "react";

function ToDoItem(props) {
  // deconstructing props
  const { item, dispatch } = props;
  const { id, title, completed } = item;

  // setting states
  const [showEdit, setShowEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  // updating task whenever there is a change in the text box
  const handleOnChange = (e) => {
    setNewTitle(e.target.value);
  };

  // change label to text box if you click on edit button
  const handleEdit = () => {
    setShowEdit(true);
  };

  // save the edit you did tot the task
  const handleEditTask = () => {
    console.log([id, newTitle]);
    dispatch({ type: "editTask", payload: { id:id, newTitle:newTitle } });
    setShowEdit(false);
  };

  // handle deleting a task from the list
  const handleDeleteTask = () => {
    console.log(id);
    dispatch({ type: "deleteTask", payload: { id } });
  };
  //update the completed status
  const handleIsComplete = ()=>{
    dispatch({ type: "completeTask", payload: { id } });
    console.log(item);
  }

  return (
    <div>
      <input type="checkbox" id={id} defaultChecked={completed} onClick={handleIsComplete} />
      {showEdit ? (
        <>
          <input
            id={id}
            type="text"
            onChange={handleOnChange}
            value={newTitle}
          />

          <button onClick={handleEditTask}>Save</button>
        </>
      ) : (
        <>
          <label>{title}</label>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDeleteTask}>Delete</button>
        </>
      )}
    </div>
  );
}
export default ToDoItem;
