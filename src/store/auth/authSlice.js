import {createSlice} from '@reduxjs/toolkit';
import {registerUser, userLogin} from './authActions';

const initialState = {
  loading: false,
  userInfo: null,
  userToken: null,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    //login user
    builder.addCase(userLogin.pending, (state, {payload}) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userLogin.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.userInfo = payload;
      state.userToken = payload.userToken;
    });

    builder.addCase(userLogin.rejected, (state, {payload}) => {
      state.loading = false;
      state.error = payload;
    });

    // register user

    builder.addCase(registerUser.pending, (state, {payload}) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(registerUser.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.success = true;
    });

    builder.addCase(registerUser.rejected, (state, {payload}) => {
      state.loading = false;
      state.error = payload;
    });
  },
});
export default authSlice.reducer;
