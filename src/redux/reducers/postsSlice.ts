import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserData } from '../../interfaces';
import { getPostsAsync, sendPostsAsync } from '../actions/postsActions';

interface IPostsSlice {
  isLoading: boolean;
  error: string;
  posts: IUserData[];
}

const initialState: IPostsSlice = {
  isLoading: false,
  error: '',
  posts: [],
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
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
