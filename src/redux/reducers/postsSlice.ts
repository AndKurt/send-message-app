import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserData } from '../../interfaces';
import { getPostsAsync, sendPostsAsync } from '../actions/postsActions';

interface IPostsSlice {
  isLoading: boolean;
  error: string;
  posts: IUserData[];
  isNewPost: boolean;
  newPost: IUserData | null;
}

const initialState: IPostsSlice = {
  isLoading: false,
  error: '',
  posts: [],
  isNewPost: false,
  newPost: null,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addNewPostToList(state, action: PayloadAction<IUserData>) {
      state.posts = [...state.posts, action.payload];
      state.newPost = action.payload;
    },
    isNewPost(state, action: PayloadAction<boolean>) {
      state.isNewPost = action.payload;
    },
  },
  extraReducers: {
    [getPostsAsync.pending.type]: (state) => {
      state.isLoading = true;
      state.posts = [];
      state.error = '';
    },
    [getPostsAsync.fulfilled.type]: (state, action: PayloadAction<IUserData[]>) => {
      state.isLoading = false;

      state.posts = action.payload;
      state.error = '';
    },
    [getPostsAsync.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.posts = [];
      state.error = action.payload;
    },
    [sendPostsAsync.pending.type]: (state) => {
      state.isLoading = true;
      state.error = '';
    },
    [sendPostsAsync.fulfilled.type]: (state) => {
      state.isLoading = false;
      state.error = '';
    },
    [sendPostsAsync.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const postsRedicer = postsSlice.reducer;
export const postsActions = postsSlice.actions;
