export default function loadResult(state= [], action) {
    switch (action.type) {
      case "LOAD_RESULT":
        return action.payload;
      default:
        return state;
    }
  }