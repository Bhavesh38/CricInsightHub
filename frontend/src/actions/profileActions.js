import * as api from "./../api/profileAPI.js";

export const getUserDetailsAction = () => async (dispatch) => {
    try {
        const { data } = await api.getUserDetailsAPI();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        return 'FAILURE';
    }
}