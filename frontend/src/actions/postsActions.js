import * as api from "./../api/postsAPI.js";
import { setAllPosts, setPostComments } from "../reduxStore/postSlice";


// like post comment 
export const likePostCommentAction = (postId, commentId) => async (dispatch) => {
    try {
        const { data } = await api.likePostCommentAPI(postId, commentId);
        return data;
    } catch (error) {
        console.log(error);
        return "FAILURE";
    }
}
export const getPostCommentsAction = (postId) => async (dispatch) => {
    try {
        const { data } = await api.getPostCommentsAPI(postId);
        dispatch(setPostComments(data));
    }
    catch (error) {
        console.log(error);
        return "FAILURE";
    }
}
export const commentOnPostAction = (postId, comment) => async (dispatch) => {
    try {
        const { data } = await api.commentOnPostAPI(postId, comment);
        return data;
    }
    catch (error) {
        console.log(error);
        return "FAILURE";
    }
}

export const likePostAction = (postId) => async (dispatch) => {
    try {
        const { data } = await api.likePostAPI(postId);
        // console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        return "FAILURE";
    }
}
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