import React, { useEffect, useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { IoMdSend } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { commentOnPostAction, getPostCommentsAction, likePostCommentAction } from '../../../../../actions/postsActions';
import { setFilteredPostComment, setPostComments } from "../../../../../reduxStore/postSlice";
import { checkIsLiked, filterCommentData, formatedTimeAgo } from '../../../../../utilities/postUtility';


const CommentComponents = ({ comment }) => {
    const dispatch = useDispatch();
    const [filteredPostComment, setFilteredPostComment] = useState(null);
    const [activeReply, setActiveReply] = useState(false);
    const { userDetails } = useSelector(state => state.profileSlice);
    const [subCommentText, setSubCommentText] = useState('');
    useEffect(() => {
        const data = filterCommentData(comment);
        setFilteredPostComment(data);
    }, [comment]);

    const handleCommentLikeClick = async () => {
        console.log(filteredPostComment.postId, filteredPostComment._id);
        const data = await dispatch(likePostCommentAction(filteredPostComment?.postId, filteredPostComment?._id));
        if (data?.message === 'SUCCESS') {
            dispatch(getPostCommentsAction(filteredPostComment?.postId));
        }
    }

    const replyOnComment = async () => {
        setActiveReply(true);
    }
    const handleReplyOnCommentFormSubmit = async (e) => {
        e.preventDefault();
        console.log(subCommentText)
        // if (subCommentText.trim().length === 0) return;
        // const res = await dispatch(commentOnPostAction(postContent?._id, subCommentText));
        // if (res?.message === 'SUCCESS') {
        //     setSubCommentText('');
        //     dispatch(getPostCommentsAction(postContent._id));
        // }
    }
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
                        <button className={`text-xs ${checkIsLiked(filteredPostComment?.likes, userDetails?._id) ? 'text-blue-500 ' : 'text-gray-600 '} hover:text-blue-600`} onClick={handleCommentLikeClick}>Like({filteredPostComment?.likes?.length})</button>
                        <button className='text-xs text-gray-600 hover:text-blue-600' onClick={replyOnComment}>Reply({filteredPostComment?.subComments?.length})</button>
                    </div>
                    <div className='text-xs text-gray-600 hover:text-gray-800'>   {formatedTimeAgo(filteredPostComment?.createdAt)}
                    </div>
                </div>
            </div>
            {/* <div className="fixed bottom-0 z-[5001] bg-gray-800flex justify-center"> */}
            {/* <div className='fixed'></div> */}
            {
                activeReply &&
                <div className='fixed bottom-0 border-t-[1px] border-gray-400 w-[99%] flex items-center gap-1 bg-gray-300 z-[6000] p-[2px] py-[4px] mb-[2px] -ml-[7px]'>
                    <input type='text' placeholder='reply...' className='flex-1 rounded-[19px] outline-none w-full border-none py-[3px] px-[12px] bg-gray-100' value={subCommentText} onChange={(e) => setSubCommentText(e.target.value)} />
                    <button type='button' onClick={handleReplyOnCommentFormSubmit}>
                        <IoMdSend className='text-[1.5rem] cursor-pointer hover:text-[#00175f] text-[#182f77]' title='Send.' />
                    </button>
                </div>
            }

            {/* </div> */}
        </div>
    );
};

export default CommentComponents;
