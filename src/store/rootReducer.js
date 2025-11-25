import { combineReducers } from "redux";
import { reducer as postReducer } from "../features/post";
import { reducer as userReducer } from "../features/user";

const rootReducer = combineReducers({
    post: postReducer,
    user: userReducer
})

export default rootReducer;