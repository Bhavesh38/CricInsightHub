import React, { useEffect, useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { updateprofilepictureAction } from '../../actions/postsActions';
import { getUserDetailsAction, updateUserDetailsAction } from '../../actions/profileActions';
const EditProfile = ({ setEditProfileModal }) => {
    const dispatch = useDispatch();

    const { userDetails } = useSelector((state) => state.profileSlice);
    const [formData, setFormData] = useState({
        userName: '',
        about: '',
        imgUrl: ''
    })

    useEffect(() => {
        if (userDetails) {
            setFormData({
                userName: userDetails.userName,
                about: userDetails.about,
                imgUrl: userDetails.profilePicture
            });
        }
    }, [userDetails]);

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        const imageUrls = files.map(file => URL.createObjectURL(file));
        setFormData({
            ...formData,
            imgUrl: imageUrls[0]
        })
        // setSelectedImage(imageUrls[0]);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const updateProfilePic = async () => {
        // console.log(formData)
        // const formData = { imgUrl: selectedImage };
        // return;
        const response = await dispatch(updateUserDetailsAction(formData));
        if (response === 'SUCCESS') {
            console.log("SUCCESS");
            setEditProfileModal(false);
            dispatch(getUserDetailsAction());
        } else {
            alert('Failed to update profile picture.');
        }
    }


    return (
        <div className='fixed top-0 bottom-0 left-0 right-0 flex justify-center w-screen h-screen bg-gray-800 bg-opacity-70 z-[9000]'>
            <div className='w-full h-full overflow-auto bg-gray-300 sm:w-1/2 md:w-1/3 max-lg:w-1/2 custom-scrollbar'>
                <div className='flex justify-end w-full p-1'>
                    <IoMdClose onClick={() => setEditProfileModal(false)} className='text-[1.5rem] cursor-pointer text-gray-600 hover:text-gray-800' title='Cancel profile editting.' />
                </div>
                <div className='flex flex-col gap-2 p-2 text-gray-800'>
                    <h3 className='font-bold'>Edit Profile</h3>
                    <div className='flex justify-between w-full'>
                        <div className='flex items-center gap-2'>
                            <div className=''><img src={formData.imgUrl} alt='img.png' className='w-[80px] h-[80px] rounded-full' /></div>
                        </div>
                        <div className='flex items-center justify-end gap-2'>
                            <div>
                                <label className='rounded-[1px] text-gray-200 bg-blue-500 text-center py-[2px] px-[4px] cursor-pointer' htmlFor='newprofile'>Choose New</label>
                                <input type="file" accept="image/*" onChange={handleImageChange} id='newprofile' className='hidden' />
                            </div>

                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-1 p-2'>
                    <label htmlFor='userName'>User Name:</label>
                    <input type='text' className='w-full rounded-[2px] px-[6px] py-[1px] focus:border-blue-500 border-gray-400 border-[1px] outline-none' name='userName' id='userName' value={formData.userName} onChange={handleInputChange} />
                </div>
                <div className='flex flex-col gap-1 p-2'>
                    <label htmlFor='userName'>About:</label>
                    <input type='text' className='w-full rounded-[2px] px-[6px] py-[1px] focus:border-blue-500 border-gray-400 border-[1px] outline-none' name='about' id='about' value={formData.about} onChange={handleInputChange} />
                </div>
                <div className='flex justify-end w-full p-2'>
                    <button className='bg-[#00175f] text-gray-200 px-2 py-1 rounded-[2px]' onClick={updateProfilePic}>Update</button>
                </div>
            </div>
        </div>
    )
}

export default EditProfile
