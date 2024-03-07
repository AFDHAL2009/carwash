import {createSlice, createAction} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
const initialState = {
  isLoggedIn: false,
  userDetails: {},
};
export const userLogout1 = createAction('logout');
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.isLoggedIn = true;
      state.userDetails = action.payload;
      console.log(state.userDetails);
    },
    logOut: state => (state = initialState),
  },
  extraReducers: builder => {
    builder.addCase(userLogout1, state => {
      AsyncStorage.removeItem('persist:root');
      state.isLoggedIn = false;
      state.userDetails = {};
      console.log('user logout');
    });
  },
});

export const {logIn, logOut, isLoggedIn} = authSlice.actions;
export default authSlice.reducer;
