import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Notification {
  message: string;
}

const notificationSlice = createSlice({
  name: 'notification',
  initialState: [] as Notification[],
  reducers: {
    addNotification: (state, action: PayloadAction<Notification>) => {
      state.push(action.payload);
    },
  },
});

export const { addNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
