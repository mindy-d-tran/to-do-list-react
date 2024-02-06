export default function reducer(state, action) {
  switch (action.type) {
    case "addTask":
      return [
        {
          id: new Date().getTime(),
          title: action.payload.title,
          completed: false,
        },
        ...state,
      ];

    case "deleteTask":
      return state.filter((task) => task.id !== action.payload.id);

    case "completeTask":
      return state.map((task) => {
        return task.id === action.payload.id
          ? { ...task, completed: !task.completed }
          : task;
      });

    case "editTask":
      return state?.map((task) => {
        return task.id === action.payload.id
          ? { ...task, title: action.payload.newTitle }
          : task;
      });

    default:
      break;
  }
}
