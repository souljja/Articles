export function searchReducer(state = '', action) {
  switch(action.type) {
    case "FIND_ARTICLE": {
      return action.value;
    }
    default: {
      return state;
    }
  }
};