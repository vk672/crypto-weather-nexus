import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  const key = process.env.NEXT_PUBLIC_NEWSDATA_API_KEY;
  const res = await axios.get(`https://newsdata.io/api/1/news?apikey=${key}&q=crypto OR weather`);
  return res.data.results;
});

const newsSlice = createSlice({
  name: 'news',
  initialState: [] as any[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNews.fulfilled, (_, action) => {
      return action.payload;
    });
  },
});

export default newsSlice.reducer;
