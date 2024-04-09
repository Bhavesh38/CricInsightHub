import React, { useEffect, useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { IoMdSend } from "react-icons/io";
import {useDispatch,useSelector} from "react-redux";
import { commentOnPostAction,getPostCommentsAction } from '../../../../../actions/postsActions';
import {setPostComments} from "../../../../../reduxStore/postSlice";


const CommentComponents = ({ comment}) => {
    const dispatch=useDispatch();

    return (
        <div className="">
            
        </div>
    );
};

export default CommentComponents;
