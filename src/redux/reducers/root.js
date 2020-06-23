import { combineReducers } from 'redux';
import browser from "./browser"
import auth from "./auth";

const rootReducer = combineReducers({
    browser,
    auth
})

export default rootReducer