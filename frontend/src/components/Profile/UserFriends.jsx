import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ShowAllFriends from './ShowAllFriends';
import { useDispatch, useSelector } from 'react-redux';
import { filterUserFriends } from '../../utilities/userUtil';
import { setUserFriendsList } from '../../reduxStore/profileSlice';

const UserFriends = () => {
    const dispatch = useDispatch();
    const { userDetails, userFriendsList } = useSelector((state) => state.profileSlice);
    const [showAllFriendsModal, setShowAllFriendsModal] = useState(false)
    // console.log(userFriendsList,userDetails);
    const setFriendData = async () => {
        const responseData = await filterUserFriends(userDetails);
        dispatch(setUserFriendsList(responseData));
    }
    useEffect(() => {
        setFriendData();
    }, [userDetails]);
    const handleFollowBtnClick = async ( user1) => {
        const res = await dispatch(editUserFriendsAction({ user1, user2:userDetails?._id}));
        if (res === 'SUCCESS') {
            dispatch(getUserDetailsAction());
            setFriendData();
        }
    }
    return (
        <div className='w-full p-2'>
            <div className='flex items-center justify-between w-full'>
                <h2 className='font-bold'>Friends<span className='font-medium'>({userDetails?.friends.length})</span></h2>
                <button type='button' className='font-semibold text-blue-500 hover:underline text-[14px]' onClick={() => setShowAllFriendsModal(true)}>See All</button>
                {showAllFriendsModal && <ShowAllFriends setShowAllFriendsModal={setShowAllFriendsModal} />}
            </div>
            <div className='flex flex-col gap-2'>
                {
                    userFriendsList?.slice(0, 5).map((friend, index) => (
                        <div key={index} className='flex items-center justify-between gap-2 border-b-[1px] border-gray-400 p-1'>
                            <div className='flex items-center gap-2'>
                                <img className='rounded-full w-8 h-8' src={friend?.profilePicture} />
                                <h2 className='font-bold'>{friend?.userName}</h2>
                            </div>
                            <button type='button' className='font-medium text-red-500 bg-red-200 text-[12px] hover:text-gray-200 hover:bg-red-500 rounded-[2px] px-[6px] py-[2px] border-[1px] border-red-500' title='Remove from friendlist.' onClick={() => handleFollowBtnClick(friend._id)}>Remove</button>
                        </div>
                    ))

                }
            </div>
        </div>
    )
}

export default UserFriends
