import { combineReducers } from "redux";
import counterReducer from "./counter";
import isLoggedReducer from "./logedin";

const AllReducers = combineReducers({
    // Import your reducers here
    counter: counterReducer,
    logedin: isLoggedReducer
});

export default AllReducers;