import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts } from '../../../../../actions/postsActions';
import CricPost from './CricPost';
import { filterFeedPosts } from '../../../../../utilities/postUtility';
import { setAllPosts } from '../../../../../reduxStore/postSlice';
const CricPosts = () => {
    const dispatch = useDispatch();
    const { allPosts } = useSelector((state) => state.postSlice);

    useEffect(() => {
        const filterPostData = async () => {
            const response = await filterFeedPosts();
            dispatch(setAllPosts(response));
        }
        filterPostData();
    }, [])
    return (
        <div className='bg-gray-200 rounded-[2px] p-[2px]'>
            {
                allPosts.map((post, index) => (
                    <CricPost key={index} postContent={post} />
                ))
            }
        </div>
    )
}

export default CricPosts
