import * as api from "../api/userAPI.js";

export const getProfileAction = (formData) => async (dispatch) => {
    try {
        // const { data } = await api.getUsersAPI();
        console.log(formData);
    } catch (error) {
        console.log(error);
        return error;
    }
}
export const registerNewUserAction = (formData) => async (dispatch) => {
    try {
        const { data } = await api.registerNewUserAPI(formData);
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const loginUserAction = (formData) => async (dispatch) => {
    try {
        const { data } = await api.loginUserAPI(formData);
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
}


