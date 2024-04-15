import React, { useEffect, useState } from 'react'
import ProfileHeading from './ProfileHeading'
import UserFriends from './UserFriends'
import UserPosts from './UserPosts';
import UserProfileSettings from './UserProfileSettings';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { getUserDetailsAction, getUserDetailsUsingIdAction } from '../../actions/profileActions';


const Profile = () => {
    const dispatch = useDispatch();
    const [isUser,setIsUser]=useState(false);
    const { userDetails,otherUserDetails } = useSelector((state) => state.profileSlice)
    const {id}=useParams();
    const [userDetailsData,setUserDetailsData]=useState('');
    useEffect(() => {
        if(id && id!=='you'){
            setUserDetailsData(otherUserDetails);
        }else if(id==='you'){
            setUserDetailsData(userDetails);
        }
    },[userDetails,otherUserDetails,id]);
    useEffect(() => {
        if(id && id!=='you'){
            dispatch(getUserDetailsUsingIdAction(id));
        }
    },[id]);
    useEffect(() => {
        dispatch(getUserDetailsAction());
    })
    return (
        <div className='flex items-center justify-center w-full p-0 sm:p-2'>
            <div className='flex flex-col w-full gap-4 bg-gray-200 sm:w-1/2 md:w-1/3 max-lg:w-1/4'>
                <ProfileHeading />
                <UserFriends />
                <UserPosts />
                {
                    userDetailsData?._id===userDetails?._id && <UserProfileSettings />
                }
            </div>
        </div>
    )
}

export default Profile
