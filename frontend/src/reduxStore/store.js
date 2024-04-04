import { configureStore } from '@reduxjs/toolkit';
import profileSlice from './profileSlice';
import userSlice from './userSlice';

const store = configureStore({
    reducer: {
        profileSlice: profileSlice,
        userSlice: userSlice
    },
});

export default store;
