import * as api from "./../api/postsAPI.js";

export const createNewPostAction = (formData) => async (dispatch) => {
    try {
        const { data } = await api.createNewPostAPI(formData);
        // console.log(data)
        return "SUCCESS";
    } catch (error) {
        console.log(error);
        return "FAILURE";
    }
}