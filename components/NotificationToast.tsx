import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const NotificationToast: React.FC = () => {
  const notifications = useSelector((state: RootState) => state.notification);

  return (
    <div className="fixed top-4 right-4 space-y-2">
      {notifications.map((note, i) => (
        <div key={i} className="bg-red-100 text-red-800 p-3 rounded shadow">
          {note.message}
        </div>
      ))}
    </div>
  );
};

export default NotificationToast;
