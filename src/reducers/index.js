import { combineReducers, configureStore } from "@reduxjs/toolkit";
import formReducer from "../slices/formslice";
const rootReducer = combineReducers({
  formData: formReducer,
});
export const store = configureStore({
  reducer: rootReducer,
});
export default rootReducer;
