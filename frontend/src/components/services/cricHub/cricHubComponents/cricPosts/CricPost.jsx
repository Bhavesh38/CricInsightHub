import React from 'react';
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { TbMessageReport } from "react-icons/tb";
import { formatedTimeAgo } from '../../../../../utilities/postUtility';

const CricPost = ({ postContent }) => {
    console.log(postContent)
    return (
        <div className='w-full border-b-[1px] border-gray-400 p-1 sm:p-2 flex flex-col gap-2'>
            <div className='flex justify-between w-full '>
                <div className='flex items-center gap-2'>
                    <img src={postContent?.user?.profilePicture} alt='user' className='w-[40px] h-[40px] rounded-full' />
                    <div className='flex flex-col gap-[2px]'>
                        <h1 className='font-semibold'>{postContent?.user?.userName}</h1>
                        <p className='text-xs text-gray-500'>{formatedTimeAgo(postContent?.createdAt)}</p>
                    </div>
                </div>
                <div className='relative'>
                    <button className='bg-[#00175f] text-gray-200 px-2 py-1 rounded-[2px]'>Follow</button>
                    {/* adding editing options */}
                    <div className='absolute right-2 top-2'>
                        <button className='text-gray-500'>...</button>
                        <div className='hidden absolute right-0 top-0 bg-gray-200 p-2 rounded-[2px]'>
                            <button className='w-full py-1 text-left'>Edit</button>
                            <button className='w-full py-1 text-left'>Delete</button>
                        </div>
                    </div>
                </div>

            </div>
            <p>
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc ultricies
                sollicitudin. Nullam non justo nec risus bibendum ultricies. Nullam in erat ac libero
            </p>
            {/* images of post */}
            <div className='flex flex-wrap gap-1'>
                <img src='https://www.w3schools.com/howto/img_avatar.png' alt='post' className='w-[90px] h-[100px]' />
                <img src='https://www.w3schools.com/howto/img_avatar.png' alt='post' className='w-[90px] h-[100px]' />
                <img src='https://www.w3schools.com/howto/img_avatar.png' alt='post' className='w-[90px] h-[100px]' />
                <img src='https://www.w3schools.com/howto/img_avatar.png' alt='post' className='w-[90px] h-[100px]' />
                <img src='https://www.w3schools.com/howto/img_avatar.png' alt='post' className='w-[90px] h-[100px]' />
            </div>
            <div className='flex items-center justify-between w-full'>
                {/* like with Count */}
                <div className='flex items-center gap-2'>
                    <button className='flex items-center gap-1'>
                        <AiFillLike />
                        <span>10</span>
                    </button>
                    {/* <button className='flex items-center gap-1'>
                        <AiOutlineLike />
                        <span>5</span>
                    </button> */}
                </div>
                <button className='flex items-center gap-1'>
                    <FaRegComment />
                    <span>5</span>
                </button>
                <button className='flex items-center gap-1'>
                    <IoShareSocialOutline />
                    <span>Share</span>
                </button>
                <button className='flex items-center gap-1'>
                    <TbMessageReport />
                    <span>Report</span>
                </button>
            </div>
        </div>
    )
}

export default CricPost
