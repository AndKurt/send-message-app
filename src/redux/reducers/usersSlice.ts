import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../interfaces';
import { getUsersAsync } from '../actions/usersAction';

interface IPostsSlice {
  isLoading: boolean;
  error: string;
  users: IUser[];
}

const initialState: IPostsSlice = {
  isLoading: false,
  error: '',
  users: [],
};

export const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [getUsersAsync.pending.type]: (state) => {
      state.isLoading = true;
      state.users = [];
      state.error = '';
    },
    [getUsersAsync.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
      state.isLoading = false;
      state.users = action.payload;
      state.error = '';
    },
    [getUsersAsync.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.users = [];
      state.error = action.payload;
    },
  },
});

export const usersReducer = usersSlice.reducer;
export const usersActions = usersSlice.actions;
