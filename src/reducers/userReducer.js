
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export const userSlide = createSlice({
    name: 'user',
    initialState: {
        users: []
    },
    reducers: {
        SEND_USER_FROM_LOGIN: (state, action) => {
            state.users.push(action.payload)
        }
    }
})


export const { SEND_USER_FROM_LOGIN } = userSlide.actions

export default userSlide.reducer