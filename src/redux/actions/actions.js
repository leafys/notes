export const REMOVE_NOTES = "REMOVE_NOTES";
export const removeNotes = (id) => {
  return {
    type: REMOVE_NOTES,
    id,
  };
};

export const CHANGE_DESC = "CHANGE_DESC";
export const changeDesc = (payload) => {
  return {
    type: CHANGE_DESC,
    payload,
  };
};

export const CHANGE_TITLE = "CHANGE_TITLE";
export const changeTitle = (payload) => {
  return {
    type: CHANGE_TITLE,
    payload,
  };
};
