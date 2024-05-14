import { setActiveUserChats } from "../reduxStore/chatSlice.js";
import * as api from "./../api/chatAPI.js";

export const getUsersAllChatsAction = (otherUserId) =>async (dispatch) =>{
    try {
        const {data} = await api.getUsersAllChatsAPI(otherUserId);
        console.log(data);
        dispatch(setActiveUserChats(data));
        // return data;
    } catch (error) {
        console.log(error);
        return "FAILURE";
    }
}