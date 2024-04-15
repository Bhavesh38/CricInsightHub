import React, { useEffect, useState } from 'react'
import CricPost from '../services/cricHub/cricHubComponents/cricPosts/CricPost'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPostOfUserAction } from '../../actions/postsActions'

const UserPosts = () => {
    const dispatch=useDispatch();
    const {id}=useParams();
    const { userDetails,otherUserDetails } = useSelector((state) => state.profileSlice);
    const [userDetailsData,setUserDetailsData]=useState('');
    const fetchUserPostData = async (userId) => {
        const res=await dispatch(getAllPostOfUserAction(userId));
    }
    useEffect(() => {
        if(id && id!=='you'){
            //
        }else if(id==='you'){
            console.log('you',userDetails?._id);
        }
    },[id]);

    
    return (
        <div className='w-full p-2'>
            <div className='flex items-center justify-between w-full'>
                <h2 className='font-bold'>Posts<span className='font-medium'>(5)</span></h2>
                <Link to='/userallposts' type='button' className='font-semibold text-blue-500 hover:underline text-[14px]' >See All</Link>
                {/* {showAllFriendsModal && <ShowAllFriends setShowAllFriendsModal={setShowAllFriendsModal} />} */}
            </div>
            <div className='flex flex-col gap-2'>
                <CricPost />
            </div>
        </div>
    )
}

export default UserPosts
