import React, { useEffect, useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { IoMdSend } from "react-icons/io";
import {useDispatch,useSelector} from "react-redux";
import { commentOnPostAction,getPostCommentsAction } from '../../../../../actions/postsActions';
import {setPostComments} from "../../../../../reduxStore/postSlice";
import CommentComponents from "./CommentComponents.jsx";


const CommentModal = ({ openCommentModal, setOpenCommentModal, postContent }) => {
    const dispatch=useDispatch();
    const {postComments}=useSelector(state => state.postSlice);
    const [isVisible, setIsVisible] = useState(false);
    const [commentText, setCommentText] = useState('');
    const [activePostsComments,setActivePostComments]=useState([]);

    console.log(activePostsComments);
    useEffect(() => {
        if(postContent._id){
            dispatch(getPostCommentsAction(postContent._id));
        }else{
            dispatch(setPostComments([]));
        }
    },[])
    useEffect(() => {
        setActivePostComments(postComments)
    },[postComments])
    useEffect(() => {
        setIsVisible(openCommentModal);
    }, [openCommentModal])

    const handleFormSubmit =async (e) => {
        e.preventDefault();
        if(commentText.trim().length===0) return;
        const res=await dispatch(commentOnPostAction(postContent?._id,commentText));
        console.log(res);
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 top-0 z-[5000] bg-gray-800 bg-opacity-40 w-screen h-screen flex justify-center pt-[150px]">
            <div
                className={`${isVisible ? 'translate-y-0' : 'translate-y-full'
                    } transform transition-transform duration-500  w-full h-full overflow-auto bg-gray-300 sm:w-1/2 md:w-1/3 max-lg:w-1/2 border-[1px] border-gray-400 rounded-[5px] flex flex-col`}
            >
                <div className='sticky top-0 flex justify-end w-full p-1 '>
                    <IoMdClose onClick={() => setOpenCommentModal(false)} className='text-[1.5rem] cursor-pointer text-gray-600 hover:text-gray-800' title='Cancel creating post.' />
                </div>
                <div className='flex-1 p-1 overflow-y-auto sm:p-2'>
                {
                activePostsComments.map((comment, index) => (
                <CommentComponents key={index} comment={comment}/> ))
                }
                </div>
                <form onSubmit={handleFormSubmit} className='sticky bottom-0 border-t-[1px] border-gray-400 w-full flex items-center p-[2px]  gap-1'>
                    <input type='text' placeholder='Comment here...' className='flex-1 rounded-[19px] outline-none w-fullborder-none py-[3px] px-[12px] bg-gray-100' value={commentText} onChange={(e) => setCommentText(e.target.value)}/>
                    <button type='submit'>
                    <IoMdSend className='text-[1.5rem] cursor-pointer hover:text-[#00175f] text-[#182f77]' title='Send.' />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CommentModal;
