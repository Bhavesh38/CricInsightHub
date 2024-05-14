import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
    name: "chatSlice",
    initialState: {
        activeChatUser:null,
        activeUserChats:[]
    },

    reducers: {
        setActiveChatUser: (state, action) => {
            state.activeChatUser = action.payload;
        },
        setActiveUserChats: (state, action) =>
        {
            state.activeUserChats = action.payload;
        }
    }
});

export const { setActiveChatUser,setActiveUserChats } = chatSlice.actions;

export default chatSlice.reducer;