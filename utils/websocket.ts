import store from '../store';


import { addNotification } from '../store/notificationSlice';

let socket: WebSocket | null = null;

export const connectWebSocket = () => {
  socket = new WebSocket('wss://example-websocket.com');

  socket.onopen = () => {
    console.log('WebSocket connected');
  };

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    store.dispatch(addNotification({ message: data.message }));
  };

  socket.onclose = () => {
    console.log('WebSocket disconnected');
    setTimeout(connectWebSocket, 5000);
  };

  socket.onerror = (err) => {
    console.error('WebSocket error:', err);
  };
};

export const disconnectWebSocket = () => {
  if (socket) {
    socket.close();
  }
};
