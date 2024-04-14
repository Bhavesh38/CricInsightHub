import * as api from "./../api/postsAPI.js";
import { setAllPosts, setPostComments } from "../reduxStore/postSlice";


//delete comment using commentId and postid
export const deleteCommentAction = (postId, commentId) => async (dispatch) => {
    try {
        const { data } = await api.deleteCommentAPI(postId, commentId);
        return data;
    } catch (error) {
        console.log(error);
        return "FAILURE";
    }
}
export const deleteSubCommentAction = (commentId, index) => async (dispatch) => {
    try {
        const { data } = await api.deleteSubCommnetAPI(commentId, index);
        return data;
    } catch (error) {
        console.log(error);
        return "FAILURE";
    }
}
export const addSubCommnetAction = (commentId, postData) => async (dispatch) => {
    try {
        console.log(commentId, postData);
        const { data } = await api.addSubCommnetAPI(commentId, postData);
        return data;
    } catch (error) {
        console.log(error);
        return "FAILURE";
    }
}
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