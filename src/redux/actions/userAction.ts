import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { BASE_URL } from '../../constants';

export const loginUserAsync = createAsyncThunk('user/loginUser', async (name: string, thunkApi) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, { name: name });

    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    return thunkApi.rejectWithValue(err.message);
  }
});
