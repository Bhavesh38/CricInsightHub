import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
    name: "profileSlice",
    initialState: {
        navbarActive: 'Home'
    },
    reducers: {
        setNavbarActive: (state, action) => {
            state.navbarActive = action.payload;
        }
    },
});

export const { setNavbarActive } = profileSlice.actions;
export default profileSlice.reducer;