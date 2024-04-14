import React,{useEffect} from 'react';
import NotificationCard from "./NotificationCard.jsx";
import {useDispatch,useSelector} from "react-redux";
import {getUsersAllNotificationsAction} from "./../../actions/userNotificationAction";

const Notification = () => {
    const dispatch=useDispatch();
    const {userNotification}=useSelector(state=> state.profileSlice);

    const fetchAllNotification = () => {
        dispatch(getUsersAllNotificationsAction());
    }
    useEffect(() => {
        fetchAllNotification();
    },[]);

    // setInterval(() => {
    //     fetchAllNotification();
    // },60000)
    return (
        <div className='flex items-center justify-center w-full p-0 sm:p-2'>
            <div className='w-full sm:w-1/2 md:w-1/3 max-lg:w-1/4 border-[1px] bg-gray-200 shadow border-gray-400 rounded-[3px]'>
                {
                    userNotification.map((noti,index) => (
                        <NotificationCard key={index} currNotification={noti}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Notification;
