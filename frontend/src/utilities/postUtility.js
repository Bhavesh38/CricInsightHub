import { setAllPosts } from "../reduxStore/postSlice";
import * as postAPI from "./../api/postsAPI";
import * as userAPI from "./../api/userAPI";
let filteredUsers = {};
let filteredPost = [];
const getAllPosts = async () => {

    try {
        const { data } = await postAPI.getAllPostsAPI();
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

const getAllUsers = async () => {
    try {
        const { data } = await userAPI.getAllUsersAPI();
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}
const filterUsersData = (userData) => {
    filteredUsers = {};
    userData.forEach(user => {
        filteredUsers[user._id] = user;
    });
}
const filterPostData = (postData) => {
    filteredPost = postData.map(post => {
        return {
            ...post,
            user: filteredUsers[post.createdBy]
        }
    });
}
export const filterFeedPosts = async () => {
    const postData = await getAllPosts();
    const userData = await getAllUsers();
    filterUsersData(userData);
    filterPostData(postData);
    return filteredPost;
}


export const formatedTimeAgo = (timestamp) => {
    const currentDate = new Date();
    const createdAtDate = new Date(timestamp);

    const timeDifferenceInSeconds = Math.floor((currentDate - createdAtDate) / 1000);

    // Define time intervals in seconds
    const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60
    };

    // Calculate time difference in different units
    let timeAgo;
    for (const interval in intervals) {
        const value = Math.floor(timeDifferenceInSeconds / intervals[interval]);
        if (value >= 1) {
            timeAgo = value + " " + interval + (value > 1 ? "s" : "") + " ago";
            break;
        }
    }

    return timeAgo || "Just now";
}

export const filterCommentData = (commentData) => {
    const returnData = {};
    //username and profile picture

    returnData._id = commentData._id;
    returnData.postId = commentData.postId;
    returnData.commentContent = commentData.commentContent;
    returnData.commentedBy = filteredUsers[commentData.commentedBy].userName;
    returnData.profilePicture = filteredUsers[commentData.commentedBy].profilePicture;
    returnData.likes = commentData.likes;
    returnData.subComments = commentData.subComments.map(subComment => {
        return {
            ...subComment,
            commentedBy: filteredUsers[subComment.commentedBy].userName,
            profilePicture: filteredUsers[subComment.commentedBy].profilePicture
        }
    });
    returnData.createdAt = commentData.createdAt;
    return returnData;
}

export const checkIsLiked = (likesArray, userId) => {
    return likesArray?.includes(userId);
}


