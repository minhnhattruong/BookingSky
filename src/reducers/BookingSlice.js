import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    refreshBk: true,

};

export const bookingSlice = createSlice({
    name: 'Boooking',
    initialState,
    reducers: {
        setState: (state, action) => {
            state.refreshBk = !state.refreshBk
        },
    },

    // handle response data from api
    // extraReducers: builder => {
    //     builder.addCase(signInApi.pending, (state, action) => {
    //         state.loading = true;
    //     })
    //     builder.addCase(signInApi.fulfilled, (state, action) => {
    //         state.loading = false;
    //         state.token = action.payload.data.access_token;
    //         state.info = {
    //             name: action.payload.data.user.name,
    //             email: action.payload.data.user.email,
    //             phone: action.payload.data.user.phone,
    //             nation: action.payload.data.user.nation,
    //             identifyCard: action.payload.data.user.identifyCard,
    //             idUser: action.payload.data.user._id,
    //         };
    //     })
    //     builder.addCase(signInApi.rejected, (state, action) => {
    //         state.token = null;
    //     })
    // }
})


// Action creators are generated for each case reducer function
export const { setState } = bookingSlice.actions;

export default bookingSlice.reducer;