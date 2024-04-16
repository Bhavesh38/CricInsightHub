import { configureStore } from '@reduxjs/toolkit';
import profileSlice from './profileSlice';
import userSlice from './userSlice';
import postSlice from './postSlice';
import chatSlice from './chatSlice';

const store = configureStore({
    reducer: {
        profileSlice: profileSlice,
        userSlice: userSlice,
        postSlice: postSlice,
        chatSlice:chatSlice
    },
});

export default store;
