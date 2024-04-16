import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserDetailsUsingIdAction } from '../../../../actions/profileActions';

const UserChatDetails = () => {
    const dispatch=useDispatch();
    const {id} =useParams();
    const {userDetails}=useSelector((state) => state.profileSlice);
    const [activeChatUser,setActiveChatUser]=useState(null);

    useEffect(() => {
        console.log(id);
        if(id){
            const fetchCurrentUserDetails = async () => {
                const res=await dispatch(getUserDetailsUsingIdAction(id));
                setActiveChatUser(res);
                console.log(res);
            }
            fetchCurrentUserDetails();
        }
    },[]);
    return (
    <div className='flex items-center justify-center w-full p-0 sm:p-2'>
            <div className='w-full sm:w-1/2 md:w-1/3 max-lg:w-1/4 border-[1px] bg-gray-200 shadow border-gray-400 rounded-[3px] p-2'>
                <div className='flex bg-[#3d4a92] rounded-[2px] text-gray-200 items-center gap-2'>
                    <img src={activeChatUser?.profilePicture} alt='img.png' className='w-10 h-10 rounded-full border-[1px] border-gray-400'/>
                    <div className='flex flex-col w-full text-[12px]'>
                        <span className='text-[14px] font-semibol'>{activeChatUser?.userName}</span>
                        <span>Last seen</span>
                    </div>
                </div>
                
            </div>
        </div>
  )
}

export default UserChatDetails
