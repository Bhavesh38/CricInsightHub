import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
    name: 'postSlice',
    initialState: {
        allPosts: [],
        fetchingPost: false,
    },

    reducers: {
        setAllPosts: (state, action) => {
            state.allPosts = action.payload;
        },
        setFetchingPosts: (state, action) => {
            state.fetchingPost = action.payload;
        }
    }
});

export const { setAllPosts, setFetchingPosts } = postSlice.actions;
export default postSlice.reducer;