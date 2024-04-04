import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        userEmail: '',
    },
    reducers: {
        setUserEmail: (state, action) => {
            state.userEmail = action.payload;
        },
    },
});

export const { setUserEmail } = userSlice.actions;
export default userSlice.reducer;