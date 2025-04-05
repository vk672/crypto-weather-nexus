import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCrypto = createAsyncThunk('crypto/fetchCrypto', async () => {
  const baseURL = process.env.NEXT_PUBLIC_COINGECKO_BASE_URL;
  const res = await axios.get(`${baseURL}/coins/markets`, {
    params: { vs_currency: 'usd', order: 'market_cap_desc', per_page: 10, page: 1, sparkline: false },
  });
  return res.data;
});

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: [] as any[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCrypto.fulfilled, (_, action) => {
      return action.payload;
    });
  },
});

export default cryptoSlice.reducer;
