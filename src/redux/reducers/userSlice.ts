import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginUserAsync } from '../actions/userAction';

interface IPostsSlice {
  isLoading: boolean;
  error: string;
  name: string;
}

const initialState: IPostsSlice = {
  isLoading: false,
  error: '',
  name: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [loginUserAsync.pending.type]: (state) => {
      state.isLoading = true;
      state.name = '';
      state.error = '';
    },
    [loginUserAsync.fulfilled.type]: (
      state,
      action: PayloadAction<{ id: string; name: string }>
    ) => {
      state.isLoading = false;
      state.name = action.payload.name;
      state.error = '';
    },
    [loginUserAsync.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.name = '';
      state.error = action.payload;
    },
  },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
