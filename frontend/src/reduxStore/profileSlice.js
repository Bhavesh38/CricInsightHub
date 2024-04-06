import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
    name: "profileSlice",
    initialState: {
        navbarActive: 'Home',
        userDetails: null
    },
    reducers: {
        setNavbarActive: (state, action) => {
            state.navbarActive = action.payload;
        },
        setUserDetails: (state, action) => {
            state.userDetails = action.payload;
        }
    },
});

export const { setNavbarActive, setUserDetails } = profileSlice.actions;
export default profileSlice.reducer;