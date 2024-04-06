import { setAllPosts } from "../reduxStore/postSlice.jsx";
import * as api from "./../api/postsAPI.js";

export const createNewPostAction = (formData) => async (dispatch) => {
    try {
        const { data } = await api.createNewPostAPI(formData);
        return "SUCCESS";
    } catch (error) {
        console.log(error);
        return "FAILURE";
    }
}

export const getAllPosts = () => async (dispatch) => {
    try {
        const { data } = await api.getAllPostsAPI();
        console.log(data);

        return data;
    } catch (error) {
        console.log(error);
        return "FAILURE";
    }
}

export const updateprofilepictureAction = (formData) => async (dispatch) => {
    try {
        const { data } = await api.updateProfilePicAPI(formData);
        console.log(data);
        return "SUCCESS";
    } catch (error) {
        console.log(error);
        return "FAILURE";
    }
}