import React, { useEffect, useState } from 'react';
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { TbMessageReport } from "react-icons/tb";
import { formatedTimeAgo } from '../../../../../utilities/postUtility';
import { useDispatch, useSelector } from 'react-redux';
import { likePostAction } from '../../../../../actions/postsActions';
import CommentModal from './CommentModal';
import { editUserFriendsAction } from '../../../../../actions/profileActions';

const CricPost = ({ postContent }) => {
    const dispatch = useDispatch();
    const { userDetails } = useSelector((state) => state.profileSlice);
    const [likesDetails, setLikesDetails] = useState({
        count: 0,
        likedByMe: false,
    });
    const [commentDetails, setCommentDetails] = useState({
        count: 0
    });
    const [openCommentModal, setOpenCommentModal] = useState(false);

    useEffect(() => {
        // set likes count
        setLikesDetails({
            count: postContent?.likes?.length,
            likedByMe: postContent?.likes?.includes(userDetails?._id)
        });
        // set comments count
        setCommentDetails({
            count: postContent?.comments?.length
        });
    }, [postContent, userDetails]);
    const handleLikeBtnClick = async () => {
        const response = await dispatch(likePostAction(postContent?._id));
        if (response.message === 'SUCCESS') {
            if (likesDetails.likedByMe) {
                setLikesDetails({
                    count: likesDetails.count - 1,
                    likedByMe: false
                });
            } else {
                setLikesDetails({
                    count: likesDetails.count + 1,
                    likedByMe: true
                });
            }
        }
    }

    const handleFollowBtnClick = async (currBtn, user1, user2) => {
        const res = await dispatch(editUserFriendsAction({ user1, user2 }));
        if (res === 'SUCCESS') {
            currBtn.textContent = 'Following';
        }
    }
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
                    {
                        //show follow btn if the current userid is not in the friend list and also the post is not created by the user
                        userDetails?._id !== postContent?.createdBy && !userDetails?.friends.includes(postContent?.createdBy) &&
                        <button className='bg-[#00175f] text-gray-200 px-2 py-1 rounded-[2px]' onClick={() => handleFollowBtnClick(this,  postContent?.createdBy,userDetails?._id)}>Follow</button>

                    }
                    {/* <button className='bg-[#00175f] text-gray-200 px-2 py-1 rounded-[2px]'>Follow</button> */}
                    {/* adding editing options */}
                    <div className='absolute hidden right-2 top-2'>
                        <button className='text-gray-500'>...</button>
                        <div className='hidden absolute right-0 top-0 bg-gray-200 p-2 rounded-[2px]'>
                            <button className='w-full py-1 text-left'>Edit</button>
                            <button className='w-full py-1 text-left'>Delete</button>
                        </div>
                    </div>
                </div>

            </div>
            <p>{postContent?.title}</p>
            {/* images of post */}
            <div className='flex flex-wrap gap-1'>
                {
                    postContent?.images.map((img, index) => (
                        <img key={index} src={img} alt='post.png' className='w-[90px] h-[100px]' />
                    ))
                }
            </div>
            <div className='flex items-center justify-between w-full gap-2'>
                {/* like with Count */}
                <button className='flex flex-[0.25] items-center gap-1 hover:bg-gray-300 hover:rounded-[4px] justify-center py-[4px]' onClick={handleLikeBtnClick}>
                    {
                        likesDetails.likedByMe ? <AiFillLike /> : <AiOutlineLike />
                    }
                    <span>{likesDetails.count}</span>
                </button>
                <button className='flex flex-[0.25] items-center gap-1 hover:bg-gray-300 hover:rounded-[4px] justify-center py-[4px]' onClick={() => setOpenCommentModal(true)}>
                    <FaRegComment />
                    <span>{commentDetails.count}</span>
                </button>
                {
                    openCommentModal && <CommentModal openCommentModal={openCommentModal} setOpenCommentModal={setOpenCommentModal} postContent={postContent} />
                }
                <button className='flex flex-[0.25] items-center gap-1 hover:bg-gray-300 hover:rounded-[4px] justify-center py-[4px]'>
                    <IoShareSocialOutline />
                    <span>Share</span>
                </button>
                <button className='flex flex-[0.25] items-center gap-1 hover:bg-gray-300 hover:rounded-[4px] justify-center py-[4px]'>
                    <TbMessageReport />
                    <span>Report</span>
                </button>
            </div>
        </div>
    )
}

export default CricPost
