import { ADD_TITLE, REMOVE_TITLE } from "./../actions/actions";

const initialState = {
  title: [],
};

export const titleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TITLE:
      return { ...state, title: [...state.title, action.payload] };

    case REMOVE_TITLE:
      return {
        ...state,
        title: state.title.filter((title) => title.id !== action.payload),
      };

    default:
      return state;
  }
};
