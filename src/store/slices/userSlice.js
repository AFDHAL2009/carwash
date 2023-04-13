/*import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  id: null,
};

// Setting up user slice (redux-toolkit)
// All the magic happens here, lol.
export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setUserId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const {setUserId} = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the stateSelectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter./// value)`
export const selectUser = state => state.user;

export default userSlice.reducer;*/

import {createSlice} from '@reduxjs/toolkit';
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
    },
    logoutSuccess: (state, action) => {
      state.user = null;
    },
  },
});
export default userSlice.reducer;
// Actions
const {loginSuccess, logoutSuccess} = userSlice.actions;
export const login =
  ({username, password}) =>
  async dispatch => {
    try {
      // const res = await api.post('/api/auth/login/', { username, password })
      dispatch(loginSuccess({username}));
    } catch (e) {
      return console.error(e.message);
    }
  };
export const logout = () => async dispatch => {
  try {
    // const res = await api.post('/api/auth/logout/')
    return dispatch(logoutSuccess());
  } catch (e) {
    return console.error(e.message);
  }
};
