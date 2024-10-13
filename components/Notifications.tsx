const Notifications = ({ notifications }) => {
    return (
      <div className="notifications">
        <h2>Notifications</h2>
        {notifications.length === 0 ? (
          <p>No notifications</p>
        ) : (
          notifications.map((notification) => (
            <div key={notification.id} className={`notification-item ${notification.isRead ? 'read' : 'unread'}`}>
              <p>{notification.message}</p>
            </div>
          ))
        )}
      </div>
    );
  };
  
  export default Notifications;
  