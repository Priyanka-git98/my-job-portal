import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
  },
  reducers: {
    signup: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));

    },
    // Add other actions as needed
  },
});

export const { signup } = authSlice.actions;
export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
