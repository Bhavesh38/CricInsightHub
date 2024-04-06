import React from 'react'
import CricPost from '../services/cricHub/cricHubComponents/cricPosts/CricPost'

const UserAllPosts = () => {
    return (
        <div className='flex items-center justify-center w-full p-0 sm:p-2'>
            <div className='flex flex-col w-full gap-4 bg-gray-200 sm:w-1/2 md:w-1/3 max-lg:w-1/4'>
                <h3 className='p-1 font-bold'>Your Posts<span className='font-medium'>(5)</span></h3>
                <div>
                    <CricPost />
                    <CricPost />
                    <CricPost />
                    <CricPost />
                </div>
            </div>
        </div>
    )
}

export default UserAllPosts
