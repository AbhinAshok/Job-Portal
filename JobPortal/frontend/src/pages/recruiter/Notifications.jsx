import {
  useEffect,
  useState,
} from "react";

import NotificationList from "../../components/recruiter/notifications/NotificationList";

import {
  getNotifications,
} from "../../api/notificationApi";

const Notifications = () => {

  const [notifications,
    setNotifications] =
    useState([]);

  useEffect(() => {

    getNotifications()
      .then(
        setNotifications
      );

  }, []);

  return (
    <>
      <h2>
        Notifications
      </h2>

      <NotificationList
        notifications={
          notifications
        }
      />
    </>
  );
};

export default Notifications;