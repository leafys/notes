import { REMOVE_NOTES, CHANGE_DESC, CHANGE_TITLE } from "./../actions/actions";

const initialState = {
  noteData: [
    {
      id: 1,
      title: "Заметка 1",
      desc: "завтра на учебу",
    },
    {
      id: 2,
      title: "Заметка 2",
      desc: "18.09.2021 день рождение у кого то",
    },
    {
      id: 3,
      title: "Заметка 3",
      desc: "на рыбалочку",
    },
    {
      id: 4,
      title: "Сходить в магазин",
      desc: "Купить продукты",
    },
    {
      id: 5,
      title: "Прийти на учебу",
      desc: "сидеть там",
    },
    {
      id: 6,
      title: "Идти туда",
      desc: "по направлению",
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

    case CHANGE_DESC: {
      const newNotes = state.noteData.map((el) => {
        if (el.id === action.payload.id) {
          el.desc = action.payload.value;
        }
        return el;
      });

      return { ...state, noteData: newNotes };
    }

    case CHANGE_TITLE: {
      const newNotes = state.noteData.map((el) => {
        if (el.id === action.payload.id) {
          el.title = action.payload.value;
        }
        return el;
      });

      return { ...state, noteData: newNotes };
    }
    default:
      return state;
  }
};
