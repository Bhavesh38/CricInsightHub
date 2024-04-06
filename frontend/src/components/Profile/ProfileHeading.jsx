import React, { useState } from 'react'
import { MdEdit } from "react-icons/md";
import EditProfile from './EditProfile';
import { useSelector } from "react-redux";

const ProfileHeading = () => {
    const { userDetails } = useSelector((state) => state.profileSlice)
    const [editProfileModal, setEditProfileModal] = useState(false);
    return (
        <div className='w-full p-2 '>
            <div className='flex justify-between gap-2'>
                <div className='flex items-center gap-2'>
                    <div className=''><img src={userDetails?.profilePicture} alt='img.png' className='w-[50px] h-[50px] rounded-full' /></div>
                    <div>
                        <h2 className='font-bold'>{userDetails?.userName || 'Cric User'}</h2>
                        <p className='text-xs'>{userDetails?.about || ''}</p>
                    </div>
                </div>
                <MdEdit title='Edit Profile' className='text-gray-600 cursor-pointer hover:text-gray-800' onClick={() => setEditProfileModal(true)} />
                {editProfileModal && <EditProfile setEditProfileModal={setEditProfileModal} />}
            </div>
        </div>
    )
}

export default ProfileHeading
