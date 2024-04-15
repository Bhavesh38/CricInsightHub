import React,{useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import { IoEllipsisVerticalSharp } from "react-icons/io5";

const NotificationCard = ({currNotification}) => {
    // console.log(currNotification);
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleNotificationClick = () => {
        navigate(currNotification?.link); 
    }
   
   
    return (
        <div className={`w-full flex gap-[2px] py-[2px] px-[4px] cursor-pointer hover:bg-gray-400 border-b-[1px] border-b-gray-900 ${currNotification?.read ? 'bg-gray-300' : 'bg-[#bab9c9]'}`} onClick={handleNotificationClick}>
            <img className='w-10 h-10 rounded-full' src={currNotification?.senderProfile} alt="profile.png"/>
            <div className='flex-1 p-[1px] flex justify-between'>
                <div className='flex flex-col'>
                    <p>{currNotification?.senderUserName} {currNotification?.notificationMessage}.</p>
                    <span className='text-sm'>{currNotification?.createdAt} {currNotification?.type}</span>
                </div>
            </div>
        </div>
    )
}

export default NotificationCard;
