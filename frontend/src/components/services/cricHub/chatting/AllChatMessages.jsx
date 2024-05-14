import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUsersAllChatsAction } from '../../../../actions/chatActions';
import { setActiveUserChats } from '../../../../reduxStore/chatSlice';
import {io} from 'socket.io-client';

const AllChatMessages = () => {
    const {id} =useParams();
    const dispatch = useDispatch();
    const {userDetails}=useSelector((state) => state.profileSlice);
    const {activeUserChats}=useSelector(state => state.chatSlice);

    useEffect(() => {
        // Establish socket connection
        const socket = io('http://localhost:3000');
        if(userDetails?._id){
          socket.emit('join', userDetails?._id);
        }
    
       
    
        // Clean up the socket connection when component unmounts
        return () => {
          socket.disconnect();
        };
      }, [userDetails]);
    useEffect(() => {
        dispatch(setActiveUserChats([]));
        dispatch(getUsersAllChatsAction(id));
    },[])
    return (
    <div className='flex flex-col w-full gap-1'>
      {
        activeUserChats.map((chat,index) => {
            return (
                <div key={index} className={`flex  w-full ${chat?.receiver===userDetails?._id ? ' justify-start' : 'justify-end '} `}>
                    <div className={`flex flex-col items-start w-fit max-w-[80%] ${chat?.receiver===userDetails?._id ? 'bg-gray-400' : 'bg-[#ac5b72]  '} rounded-[19px] px-[12px]`}>

                <span className='text-[12px]'>{chat?.message}</span>
                <div className='flex justify-end w-full text-[7px]'>{chat?.createdAt}</div>
                    </div>
                {/* <p className='text-xs'>{chat?.sender}</p> */}
                </div>
            )
            
        })
      }
    </div>
  )
}

export default AllChatMessages;
