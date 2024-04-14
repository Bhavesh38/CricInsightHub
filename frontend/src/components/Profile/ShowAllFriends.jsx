import React, { useEffect, useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { useSelector } from 'react-redux';

const ShowAllFriends = ({ setShowAllFriendsModal }) => {
    const { userDetails, userFriendsList } = useSelector((state) => state.profileSlice);
    const [currentFriends, setCurrentFriends] = useState([]);

    useEffect(() => {
        setCurrentFriends(userFriendsList);
    }, [userFriendsList]);

    const handleInputChange = (e) => {
        const val = e.target.value;
        if (val === '') {
            setCurrentFriends(userFriendsList);
        } else {
            const filteredFriends = userFriendsList.filter(friend => friend?.userName.toLowerCase().includes(val.toLowerCase()));
            setCurrentFriends(filteredFriends);
        }
    }
    return (
        <div className='fixed top-0 bottom-0 left-0 right-0 flex justify-center w-screen h-screen bg-gray-800 bg-opacity-70 z-[5000]'>
            <div className='w-full h-full overflow-auto bg-gray-300 sm:w-1/2 md:w-1/3 max-lg:w-1/2 custom-scrollbar'>
                <div className='flex justify-end w-full p-1'>
                    <IoMdClose onClick={() => setShowAllFriendsModal(false)} className='text-[1.5rem] cursor-pointer text-gray-600 hover:text-gray-800' title='Cancel creating post.' />
                </div>
                <div className='flex flex-col gap-2 p-2 text-gray-800'>
                    <h3 className='font-bold'>Your friends<span className='font-medium'>({userFriendsList.length})</span></h3>
                    <div className='flex items-center gap-2'>
                        <input onChange={handleInputChange} type='text' className='w-full p-1 border-[1px] border-gray-400 rounded-[19px] px-[16px] outline-none focus:border-blue-500' placeholder='Search friends...' />
                    </div>
                    <div className='flex flex-col gap-2 overflow-auto'>
                        {
                            currentFriends?.map((friend, index) => (
                                <div key={index} className='flex items-center justify-between gap-2 border-b-[1px] border-gray-400 p-1'>
                                    <div className='flex items-center gap-2'>
                                        <img className='rounded-full w-8 h-8' src={friend?.profilePicture} />
                                        <h2 className='font-bold'>{friend?.userName}</h2>
                                    </div>
                                    <button type='button' className='font-medium text-red-500 bg-red-200 text-[12px] hover:text-gray-200 hover:bg-red-500 rounded-[2px] px-[6px] py-[2px] border-[1px] border-red-500' title='Remove from friendlist.'>Remove</button>
                                </div>
                            ))

                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ShowAllFriends
