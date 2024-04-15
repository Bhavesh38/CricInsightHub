import * as userAPI from "./../api/userAPI";
let filteredUsers={};
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
    userData?.forEach(user => {
        filteredUsers[user._id] = user;
    });
}
export const filterUserFriends = async (userDetails) => {
    const allUsers = await getAllUsers();
    const friends = userDetails?.friends;
    const userFriends = [];
    friends?.forEach((friend) => {
        userFriends.push(allUsers.find((user) => user._id === friend));
    });
    return userFriends;
}
const formatedTimeAgo = (timestamp) => {
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
export const filterNotificationData = async (notificationArray) => {
    const allUsers = await getAllUsers();
    filterUsersData(allUsers);
    let resArray=[];
    for(let i=0;i<notificationArray.length;i++){
        const {createdAt,link,message,read,sender,receiver,_id,type}=notificationArray[i];
        const tempData={
            _id,
            senderProfile:filteredUsers[sender]?.profilePicture,
            senderUserName:filteredUsers[sender]?.userName,
            senderUserId:sender,
            notificationMessage:message,
            link,
            read,
            type,
            createdAt:formatedTimeAgo(createdAt)
        }
        resArray.push(tempData);
    }
    // console.log(resArray);
    return resArray;
}
// Function to validate email
export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
// Function to validate password
export const validatePassword = (password) => {
    // Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one special character
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
};