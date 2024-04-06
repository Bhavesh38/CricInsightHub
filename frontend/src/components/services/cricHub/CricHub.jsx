import React from 'react'
import CreateNewPost from './cricHubComponents/CreateNewPost'
import CricPosts from './cricHubComponents/cricPosts/CricPosts'

const CricHub = () => {
    return (
        <div className='flex items-center justify-center w-full p-0 sm:p-2'>
            <div className='flex flex-col w-full gap-4 sm:w-1/2 md:w-1/3 max-lg:w-1/4'>
                <CreateNewPost />
                <CricPosts />
            </div>
        </div>
    )
}

export default CricHub
