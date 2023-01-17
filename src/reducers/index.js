
import authSlice from './AuthSlice';
import userReducer from './userReducer';
import bookingSlice from './BookingSlice';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    auth: authSlice,
    user: userReducer,
    booking: bookingSlice
})

export default rootReducer