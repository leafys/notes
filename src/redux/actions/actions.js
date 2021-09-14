export const REMOVE_NOTES = "REMOVE_NOTES";
export const removeNotes = (id) => {
  return {
    type: REMOVE_NOTES,
    id,
  };
};

export const CHANGE_INPUT = "CHANGE_INPUT";
export const changeInput = (payload) => {
  return {
    type: CHANGE_INPUT,
    payload,
  };
};
