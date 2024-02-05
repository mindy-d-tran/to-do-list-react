export default function reducer(state, action) {
  switch (action.type) {
    case "addTask":
      return [
        {
            id: new Date().getTime(),
            title: action.payload.title,
            completed: false
        },
        ...state,
      ];

    case "deleteTask":
      return "";

    case "editTask":
      return;

    default:
      break;
  }
}
