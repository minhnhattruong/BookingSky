
import authSlice from './authSlice';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    auth: authSlice,
})

export default rootReducer