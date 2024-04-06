import React from 'react'
import CricPost from '../services/cricHub/cricHubComponents/cricPosts/CricPost'
import { Link } from 'react-router-dom'

const UserPosts = () => {
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
