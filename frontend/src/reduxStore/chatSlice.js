import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
    name: "chatSlice",
    initialState: {
        activeChatUser:null
    },

    reducers: {
        setActiveChatUser: (state, action) => {
            state.activeChatUser = action.payload;
        }
    }
});

export const { setActiveChatUser } = chatSlice.actions;

export default chatSlice.reducer;