export default function reducer(state, action) {
  console.log(state);
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

    case "editTask":
      return;

    default:
      break;
  }
}
