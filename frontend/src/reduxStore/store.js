import { configureStore } from '@reduxjs/toolkit';
import profileSlice from './profileSlice';
import userSlice from './userSlice';
import postSlice from './postSlice';

const store = configureStore({
    reducer: {
        profileSlice: profileSlice,
        userSlice: userSlice,
        postSlice: postSlice
    },
});

export default store;
