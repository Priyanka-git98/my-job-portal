import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,

    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },

    },
});

export const { setUser } = authSlice.actions;
export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
