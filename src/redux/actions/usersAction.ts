import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { BASE_URL } from '../../constants';

export const getUsersAsync = createAsyncThunk('users/getUsers', async (_, thunkApi) => {
  try {
    const response = await axios.get(`${BASE_URL}/users`);

    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    return thunkApi.rejectWithValue(err.message);
  }
});
