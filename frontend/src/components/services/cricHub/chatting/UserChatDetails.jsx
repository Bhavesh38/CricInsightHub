import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IoMdSend } from "react-icons/io";
import { getUserDetailsUsingIdAction } from '../../../../actions/profileActions';


import {io} from 'socket.io-client';
import AllChatMessages from './AllChatMessages';
const socket = io('http://localhost:3000');


const UserChatDetails = () => {
    const dispatch=useDispatch();
    const {id} =useParams();
    const {userDetails}=useSelector((state) => state.profileSlice);
    const [activeChatUser,setActiveChatUser]=useState(null);
    const [newlyTypedMessage,setNewlyTypedMessage]=useState('');
    const [flag,setFlag]=useState(false);

    useEffect(() => {
        // console.log(id);
        if(id){
            const fetchCurrentUserDetails = async () => {
                const res=await dispatch(getUserDetailsUsingIdAction(id));
                setActiveChatUser(res);
            }
            fetchCurrentUserDetails();
            socket.emit('join',id);
        }
    },[]);
    useEffect(() => {
        // Event listener for receiving messages from the server
        // console.log('object');
        socket.on('chat message', (data) => {
            console.log(data,'12333');
        });
        // return () => {
        //     socket.disconnect();
        //   };
      }, []);
    const sendNewMessage = () => {
        const saveNewMessageData={
            message:newlyTypedMessage,
            sender:userDetails?._id,
            receiver:activeChatUser?._id
        }
        if(saveNewMessageData.message.trim().length==0 || saveNewMessageData.sender.length===0 || saveNewMessageData.receiver.length===0 ) return;
        socket.emit('saveNewMessage',saveNewMessageData);
    }

   
    
        return (
    <div className='fixed flex justify-center w-screen h-screen p-0 overflow-auto'>
            <div className='w-full flex flex-col sm:w-1/2 md:w-1/3 max-lg:w-1/4 border-[1px] shadow border-gray-400 rounded-[3px] gap-1 bg-[#3d4a92] max-h-[100vh] overflow-auto'>
                <div className='flex border-b-[1px] rounded-[2px] text-gray-200 items-center gap-2 p-2 h-[50px]'>
                    <img src={activeChatUser?.profilePicture} alt='img.png' className='w-10 h-[40px] rounded-full border-[1px] border-gray-400'/>
                    <div className='flex flex-col w-full text-[12px]'>
                        <span className='text-[14px] font-semibol'>{activeChatUser?.userName}</span>
                        <span>Last seen</span>
                    </div>
                </div>
                <div className='flex w-full h-[calc(100vh-140px)] overflow-auto p-2'>
                    <AllChatMessages/>
                </div>
                <div className='sticky bottom-0 flex items-center w-full gap-1 p-1 bg-gray-100 h-[35px]'>
                    <input className='w-full outline-none px-[12px] py-[1px] border-[1px] rounded-[19px] border-gray-400' value={newlyTypedMessage} onChange={(e) => setNewlyTypedMessage(e.target.value)}/>
                    <span onClick={sendNewMessage} className='text-gray-200 text-[18px] border-[1px] rounded-full bg-[#3d4a92] p-[4px] cursor-pointer'>
                        <IoMdSend  />
                    </span>
                </div>
            </div>
            
        </div>
  )
}

export default UserChatDetails
