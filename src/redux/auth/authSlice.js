import { createSlice } from '@reduxjs/toolkit';
import { fetchUserData, logIn, logOut, register } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const handleFullfilled = (state, { payload }) => {
  state.token = payload.token;
  state.user = payload.user;
  state.isLoggedIn = true;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled]: handleFullfilled,
    [logIn.fulfilled]: handleFullfilled,
    [fetchUserData.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled]: state => {
      state.token = null;
      state.user = { name: null, email: null };
      state.isLoggedIn = false;
    },
  },
});

export default authSlice.reducer;
