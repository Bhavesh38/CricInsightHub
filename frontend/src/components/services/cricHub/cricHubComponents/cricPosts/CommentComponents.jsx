import React, { useEffect, useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { IoMdSend } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { commentOnPostAction, getPostCommentsAction } from '../../../../../actions/postsActions';
import { setFilteredPostComment, setPostComments } from "../../../../../reduxStore/postSlice";
import { filterCommentData, formatedTimeAgo } from '../../../../../utilities/postUtility';


const CommentComponents = ({ comment }) => {
    const dispatch = useDispatch();
    const { filteredPostComment } = useSelector(state => state.postSlice);
    useEffect(() => {
        const data = filterCommentData(comment);
        dispatch(setFilteredPostComment(data));
    }, [comment]);

    return (
        <div className='flex items-center w-full gap-1 text-[12px]'>
            {/* <div className='w-[40px] h-[40px] rounded-full bg-gray-500'></div> */}
            <div className='flex-1'>
                <div className='flex w-full gap-1'>
                    <div><img src={filteredPostComment?.profilePicture} alt='img.png' className='w-[25px] h-[25px] rounded-full' /></div>
                    <div className=' flex flex-1 flex-col p-1 bg-gray-400 rounded-[6px] '>
                        <span className='font-medium'>{filteredPostComment?.commentedBy}</span>
                        <span className=''>{filteredPostComment?.commentContent}</span>
                    </div>
                </div>
                {/* like with count and reply with count feature */}
                <div className='flex items-center gap-3 pl-[40px]'>
                    <div className='flex items-center gap-3'>
                        <button className='text-xs text-gray-600 hover:text-gray-800'>Like({filteredPostComment?.likes?.length})</button>
                        <button className='text-xs text-gray-600 hover:text-gray-800'>Reply({filteredPostComment?.subComments?.length})</button>
                    </div>
                    <div className='text-xs text-gray-600 hover:text-gray-800'>   {formatedTimeAgo(filteredPostComment?.createdAt)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommentComponents;
