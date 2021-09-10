import { REMOVE_NOTES } from "./../actions/actions";

const initialState = {
  noteData: [
    {
      id: 1,
      title: "Шмот",
      desc: "Фронтенд",
    },
    {
      id: 2,
      title: "Работа",
      desc: "Прийти на работу",
    },
    {
      id: 3,
      title: "Учеба",
      desc: "Закрыть предметы",
    },
  ],
};

export const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_NOTES:
      return {
        ...state,
        noteData: state.noteData.filter((note) => note.id !== action.payload),
      };
    default:
      return state;
  }
};
