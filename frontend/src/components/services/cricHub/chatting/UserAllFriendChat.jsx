import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { filterUserFriends } from '../../../../utilities/userUtil';
import UserChat from './UserChat';

const UserAllFriendChat = () => {
    const dispatch=useDispatch();
    const {userDetails}=useSelector((state) => state.profileSlice);
    const [userFriends, setUserFriends] = useState([]);

    useEffect(() => {
        const getUserDetails = async () => {
            const response = await filterUserFriends(userDetails);
            setUserFriends(response);
        }
        getUserDetails();
    },[userDetails]);
  return (
    <div className='w-full flex flex-col gap-1 max-h-[80vh] overflow-y-auto py-1'>
        {
            userFriends.map((friendElement,index) => (
                <UserChat key={index} friendElement={friendElement}/>
            ))
        }
    </div>
  )
}

export default UserAllFriendChat
