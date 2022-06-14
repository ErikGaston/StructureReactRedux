import { combineReducers } from "redux";
import ejemploReducer from "./ejemploReducer";

const rootReducer = combineReducers({
    ejemploReducers: ejemploReducer
});

export default rootReducer;