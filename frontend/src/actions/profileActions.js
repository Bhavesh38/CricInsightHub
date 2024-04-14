import { setUserDetails } from "../reduxStore/profileSlice.js";
import * as api from "./../api/profileAPI.js";

export const editUserFriendsAction = (formData) => async (dispatch) => {
    try {
        const response = await api.editUserFriendsAPI(formData);
        return 'SUCCESS';
    } catch (error) {
        console.log(error);
        return 'FAILURE';
    }
}
export const getUserDetailsAction = () => async (dispatch) => {
    try {
        const { data } = await api.getUserDetailsAPI();
        dispatch(setUserDetails(data));
        // console.log(data)
        return data;
    } catch (error) {
        console.log(error);
        return 'FAILURE';
    }
}

export const updateUserDetailsAction = (formData) => async (dispatch) => {
    try {
        const response = await api.updateUserDetailsAPI(formData);
        return 'SUCCESS';
    } catch (error) {
        console.log(error);
        return 'FAILURE';
    }
}