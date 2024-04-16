import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { setActiveChatUser } from '../../../../reduxStore/chatSlice';

const UserChat = ({friendElement}) => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleUserChatClick = () => {
        dispatch(setActiveChatUser(friendElement));
        navigate(`/chat/user/${friendElement._id}`);
    }
  return (
    <div className='flex items-center bg-gray-300 rounded-[19px] p-[2px] py-[1px] gap-1 cursor-pointer hover:bg-gray-400' onClick={handleUserChatClick}>
        <img src={friendElement?.profilePicture} alt='img.png' className='w-10 h-10 rounded-full border-[1px] border-gray-400'/>
        <div className='flex flex-col w-full text-[12px]'>
            <span className='text-[13px] font-semibold text-gray-800'>{friendElement?.userName}</span>
            <span>Last Message</span>
        </div>
    </div>
  )
}

export default UserChat
