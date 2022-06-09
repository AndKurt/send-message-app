import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { BASE_URL } from '../../constants';
import { ISendPost } from '../../interfaces';

export const getPostsAsync = createAsyncThunk(
  'posts/getColumns',
  async (activeUser: string, thunkApi) => {
    try {
      const response = await axios.get(`${BASE_URL}/posts?activeUser=${activeUser}`);

      return response.data;
    } catch (error) {
      const err = error as AxiosError;
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

interface ISendPostAsync {
  data: ISendPost;
}
export const sendPostsAsync = createAsyncThunk(
  'posts/sendPost',
  async ({ data }: ISendPostAsync, thunkApi) => {
    try {
      const response = await axios.post(`${BASE_URL}/posts`, {
        title: data.title,
        recepient: data.recepient,
        sender: data.sender,
        message: data.message,
      });

      return response.data;
    } catch (error) {
      const err = error as AxiosError;
      return thunkApi.rejectWithValue(err.message);
    }
  }
);
