import {
  useEffect,
  useState,
} from "react";

import {
  getNotifications,
  markAsRead,
} from "../../api/notificationApi";

import NotificationCard from "../../components/notifications/NotificationCard";

const Notifications = () => {

  const [notifications,
    setNotifications] =
    useState([]);

  const loadData = () => {
    getNotifications().then(
      setNotifications
    );
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleRead =
    async (id) => {

      await markAsRead(id);

      loadData();
    };

  return (
    <div>

      <h2>
        Notifications
      </h2>

      {notifications.map(
        (notification) => (

          <NotificationCard
            key={
              notification.id
            }
            notification={
              notification
            }
            onRead={
              handleRead
            }
          />

        )
      )}

    </div>
  );
};

export default Notifications;