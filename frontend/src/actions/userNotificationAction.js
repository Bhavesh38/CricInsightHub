import * as api from "../api/userNotificationAPI.js";
import {setUserNotifications} from "../reduxStore/profileSlice";
import {filterNotificationData} from "../utilities/userUtil.js"



export const getUsersAllNotificationsAction = () => async (dispatch) => {
    try {
        const { data } = await api.getUsersAllNotificationsAPI();
        const res=await filterNotificationData(data);
        // console.log(res);
        dispatch(setUserNotifications(res));
    } catch (error) {
        console.log(error);
        return error;
    }
}



