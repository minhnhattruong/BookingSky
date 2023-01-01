import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login } from '../api/apiLogin';

const initialState = {
  token: null,
  tokenFCM: null,
  info: {},
  loading: false,
  role: [],
};

export const signInApi = createAsyncThunk(

  'Auth/login',
  async (params, thunkAPI) => {
    try {
      return await login(params)
    } catch (err) {
      return rejectWithValue(err)
    }
  },
);


export const authSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    clearState: (state, action) => {
      state.token = null
      state.info = {}
      state.role = []
      state.tokenFCM = null
    },
    addState: (state, action) => {
      state.token = 'gggg';
    },
    saveFCM: (state, action) => {
      state.tokenFCM = action.payload;
    },
  },
  // handle response data from api
  extraReducers: builder => {
    builder.addCase(signInApi.pending, (state, action) => {
      state.loading = true;
    })
    builder.addCase(signInApi.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload.data.accessToken;
      state.info = {
        name: action.payload.data.user.username,
        phone: action.payload.data.user.phone,
        idUser: action.payload.data.user.id,
      };
    })
    builder.addCase(signInApi.rejected, (state, action) => {
      state.token = null;
    })
  }
})


// Action creators are generated for each case reducer function
export const { clearState, addState, saveFCM } = authSlice.actions;

export default authSlice.reducer;