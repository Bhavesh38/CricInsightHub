import React, { useEffect } from 'react'
import ProfileHeading from './ProfileHeading'
import UserFriends from './UserFriends'
import UserPosts from './UserPosts';
import UserProfileSettings from './UserProfileSettings';
import { useDispatch } from "react-redux";
import { getUserDetailsAction } from '../../actions/profileActions';


const Profile = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserDetailsAction());
    })
    return (
        <div className='flex items-center justify-center w-full p-0 sm:p-2'>
            <div className='flex flex-col w-full gap-4 bg-gray-200 sm:w-1/2 md:w-1/3 max-lg:w-1/4'>
                <ProfileHeading />
                <UserFriends />
                <UserPosts />
                <UserProfileSettings/>
            </div>
        </div>
    )
}

export default Profile
