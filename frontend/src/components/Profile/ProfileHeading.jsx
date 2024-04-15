import React, { useEffect, useState } from 'react'
import { MdEdit } from "react-icons/md";
import EditProfile from './EditProfile';
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';

const ProfileHeading = () => {
    const {id}=useParams();
    const { userDetails,otherUserDetails } = useSelector((state) => state.profileSlice)
    const [editProfileModal, setEditProfileModal] = useState(false);
    const [userDetailsData,setUserDetailsData]=useState('');
    useEffect(() => {
        if(id && id!=='you'){
            setUserDetailsData(otherUserDetails);
        }else if(id==='you'){
            setUserDetailsData(userDetails);
        }
    },[userDetails,otherUserDetails,id]);
    return (
        <div className='w-full p-2 '>
            <div className='flex justify-between gap-2'>
                <div className='flex items-center gap-2'>
                    <div className=''><img src={userDetailsData?.profilePicture} alt='img.png' className='w-[50px] h-[50px] rounded-full' /></div>
                    <div>
                        <h2 className='font-bold'>{userDetailsData?.userName || 'Cric User'}</h2>
                        <p className='text-xs'>{userDetailsData?.about || ''}</p>
                    </div>
                </div>
                {
                    userDetailsData?._id===userDetails?._id &&
                    <>
                        <MdEdit title='Edit Profile' className='text-gray-600 cursor-pointer hover:text-gray-800' onClick={() => setEditProfileModal(true)} />
                        {editProfileModal && <EditProfile setEditProfileModal={setEditProfileModal} />}
                    </>
                }
            </div>
        </div>
    )
}

export default ProfileHeading
