import { REMOVE_NOTES } from "./../actions/actions";
import { CHANGE_INPUT } from "./../actions/actions";

const initialState = {
  noteData: [
    {
      id: 1,
      title: "Тест первый",
      desc: "Лорем",
    },
    {
      id: 2,
      title: "Обучение",
      desc: "трейнинг",
    },
    {
      id: 3,
      title: "Тест 3",
      desc: "лорем",
    },
  ],
};

export const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_NOTES: {
      const newNotes = state.noteData.filter((note) => note.id !== action.id);
      return {
        ...state,
        noteData: newNotes,
      };
    }

    case CHANGE_INPUT: {
      const testedNote = (state.noteData.find(
        (el) => el.id === action.payload.id
      ).desc = action.payload.newValue);
      return { ...state, testedNote: testedNote.desc };
    }
    default:
      return state;
  }
};
