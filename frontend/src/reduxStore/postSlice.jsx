import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
    name: 'postSlice',
    initialState: {
        allPosts: [],
        fetchingPost: false,
        postComments: [],
        filteredPostComment: null
    },

    reducers: {
        setAllPosts: (state, action) => {
            state.allPosts = action.payload;
        },
        setFetchingPosts: (state, action) => {
            state.fetchingPost = action.payload;
        },
        setPostComments: (state, action) => {
            state.postComments = action.payload;
        },
        setFilteredPostComment: (state, action) => {
            state.filteredPostComment = action.payload;
        }
    }
});

export const { setAllPosts, setFetchingPosts, setPostComments, setFilteredPostComment } = postSlice.actions;
export default postSlice.reducer;