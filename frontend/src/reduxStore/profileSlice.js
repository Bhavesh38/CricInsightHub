import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
    name: "profileSlice",
    initialState: {
        navbarActive: 'Home',
        userDetails: null,
        userFriendsList: [],
        userNotification:[]
    },
    reducers: {
        setNavbarActive: (state, action) => {
            state.navbarActive = action.payload;
        },
        setUserDetails: (state, action) => {
            state.userDetails = action.payload;
        },
        setUserFriendsList: (state, action) => {
            state.userFriendsList = action.payload;
        },
        setUserNotifications:(state,action) => {
            state.userNotification=action.payload
        }
    },
});

export const { setNavbarActive, setUserDetails, setUserFriendsList,setUserNotifications } = profileSlice.actions;
export default profileSlice.reducer;