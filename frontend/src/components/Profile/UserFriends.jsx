import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ShowAllFriends from './ShowAllFriends';

const UserFriends = () => {
    const [showAllFriendsModal, setShowAllFriendsModal] = useState(false);
    return (
        <div className='w-full p-2'>
            <div className='flex items-center justify-between w-full'>
                <h2 className='font-bold'>Friends<span className='font-medium'>(5)</span></h2>
                <button type='button' className='font-semibold text-blue-500 hover:underline text-[14px]' onClick={() => setShowAllFriendsModal(true)}>See All</button>
                {showAllFriendsModal && <ShowAllFriends setShowAllFriendsModal={setShowAllFriendsModal} />}
            </div>
            {/* want to show some friends with their profile picture and name on the left while remove button on the right */}
            <div className='flex flex-col gap-2'>
                <div className='flex items-center justify-between gap-2 border-b-[1px] border-gray-400 p-1'>
                    <div className='flex items-center gap-2'>
                        <div className='w-8 h-8 bg-gray-300 rounded-full'></div>
                        <h2 className='font-bold'>Name</h2>
                    </div>
                    <button type='button' className='font-medium text-red-400 text-[12px] hover:underline' title='Remove from friendlist.'>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default UserFriends
