import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCurrentPostAction } from '../../../../../actions/postsActions';
import CricPost from './CricPost';


const CurrentPost = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [postContent,setPostContent] = useState(null);
    useEffect(() => {
        const getCurrentPostData = async () => {
            const data=await dispatch(getCurrentPostAction(id));
            // console.log(data);
            if(data){
                setPostContent(data);
            }
        }
        if(id){
            getCurrentPostData();
        }
    },[]);
  return (
    <div className='flex items-center justify-center w-full p-0 sm:p-2'>
            <div className='flex flex-col w-full gap-4 bg-gray-200 sm:w-1/2 md:w-1/3 max-lg:w-1/4'>
              {
                postContent && <CricPost postContent={postContent}/>
              }
            </div>
        </div>
  )
}

export default CurrentPost
