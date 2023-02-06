import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login } from '../api/apiLogin';

const initialState = {
  token: null,
  tokenFCM: null,
  userId: null,
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
      console.log(err);
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
    },
    addState: (state, action) => {
      state.token = action.payload.access_token;
    },
  },

  // handle response data from api
  extraReducers: builder => {
    builder.addCase(signInApi.pending, (state, action) => {
      state.loading = true;
    })
    builder.addCase(signInApi.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload.data?.access_token;
      state.info = {
        name: action.payload.data?.user.name,
        email: action.payload.data?.user.email,
        phone: action.payload.data?.user.phone,
        nation: action.payload.data?.user.nation,
        identifyCard: action.payload.data?.user.identifyCard,
        idUser: action.payload.data?.user._id,
        role: action.payload.data?.user.isAdmin,
      };
    })
    builder.addCase(signInApi.rejected, (state, action) => {
      state.token = null;
    })
  }
})


// Action creators are generated for each case reducer function
export const { clearState, addState } = authSlice.actions;

export default authSlice.reducer;