import { useState, useEffect } from 'react';
import { fetchNotifications } from './notificationService';

const NotificationComponent = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchNotifications().then((data) => setNotifications(data));
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6">Notifications</h1>

      {notifications.length === 0 ? (
        <p>No notifications available.</p>
      ) : (
        <ul className="space-y-4">
          {notifications.map((notification, index) => (
            <li key={index} className="p-4 bg-gray-50 rounded shadow">
              <p>{notification.message}</p>
              <p>Date: {new Date(notification.date).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotificationComponent;
