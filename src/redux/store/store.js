import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { noteReducer } from "../reducers/noteReducer";

const rootReducer = combineReducers({
  note: noteReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
