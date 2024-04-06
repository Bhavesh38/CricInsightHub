import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { IoMdClose } from "react-icons/io";
import { FaRegImages } from "react-icons/fa";
import { createNewPostAction } from '../../../../actions/postsActions';
import { getUserDetailsAction } from '../../../../actions/profileActions';

const NewPostModal = ({ setIsModalOpen }) => {
    const dispatch = useDispatch();
    const [images, setImages] = useState([]);

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        const imageUrls = files.map(file => URL.createObjectURL(file));
        setImages(prevImages => prevImages.concat(imageUrls));
    };

    const handleNewPostCreation = async () => {
        const formData = {
            images,
            textContent: document.getElementById('textContent').value
        }
        const res = await dispatch(createNewPostAction(formData));
        if (res === 'SUCCESS') {
            setIsModalOpen(false);
            setImages([]);
            document.getElementById('textContent').value = '';
        } else {
            alert('Failed to create new post.');
        }
    }
    return (
        <div className='fixed top-0 bottom-0 left-0 right-0 flex justify-center w-screen h-screen bg-gray-800 bg-opacity-70 z-[9000]'>
            <div className='w-full h-full overflow-auto bg-gray-300 sm:w-1/2 md:w-1/3 max-lg:w-1/2 custom-scrollbar'>
                <div className='flex justify-end w-full p-1'>
                    <IoMdClose onClick={() => setIsModalOpen(false)} className='text-[1.5rem] cursor-pointer text-gray-600 hover:text-gray-800' title='Cancel creating post.' />
                </div>
                <div className='flex flex-col gap-2 p-2 text-gray-800'>
                    <h3 className='font-semibold text-[1.2rem]'>Start talking about something.</h3>
                    <textarea className='w-full p-2 border-[1px] border-gray-500 rounded-[5px] h-[100px]' placeholder='Write something here...' id='textContent'></textarea>
                    <div className='flex flex-wrap'>
                        {images.map((imageUrl, index) => (
                            <img key={index} src={imageUrl} alt={`Preview ${index}`} className={`max-w-[100px] h-[150px] z-[${index * 10 + 1}]`} />
                        ))}
                    </div>
                    <div className='flex items-center justify-between w-full gap-2 px-2'>
                        <input
                            className='hidden'
                            id='image_input'
                            name='image_input'
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleImageChange}
                        />
                        <label className='' htmlFor='image_input'>
                            <FaRegImages className='text-[1.5rem] cursor-pointer text-gray-600 hover:text-gray-800' title='Add images to post.' />
                        </label>
                        <button type='button' className='border-[1px] border-[#ad5568] px-[6px] py-[1px] bg-gray-100 text-[#ad5568] rounded-sm font-semibold hover:bg-[#ad5568] hover:text-gray-100 hover:shadow-sm' title='Create new post.' onClick={handleNewPostCreation}>Post</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NewPostModal
