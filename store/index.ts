
import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './cryptoSlice';
import newsReducer from './newsSlice';
import weatherReducer from './weatherSlice';
import notificationReducer from './notificationSlice';

export const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
    news: newsReducer,
    weather: weatherReducer,
    notification: notificationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store;
