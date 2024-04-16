import React from 'react'
import StartConvo from './StartConvo'
import UserAllFriendChat from './UserAllFriendChat'

const Chat = () => {
    return (
        <div className='flex items-center justify-center w-full p-0 sm:p-2'>
            <div className='w-full sm:w-1/2 md:w-1/3 max-lg:w-1/4 border-[1px] bg-gray-200 shadow border-gray-400 rounded-[3px] p-2'>
                <StartConvo />
                <UserAllFriendChat/>
            </div>
        </div>
    )
}

export default Chat
