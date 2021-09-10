export const ADD_TITLE = "ADD_TITLE";

export const REMOVE_NOTES = "REMOVE_NOTES";

export const addTitle = (payload) => {
  return {
    type: ADD_TITLE,
    payload,
  };
};

export const removeNotes = (payload) => {
  return {
    type: REMOVE_NOTES,
    payload,
  };
};
