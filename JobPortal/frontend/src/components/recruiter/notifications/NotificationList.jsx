import {
  List,
  ListItem,
  Badge,
} from "@mui/material";

const NotificationList = ({
  notifications,
}) => {

  return (
    <List>

      {notifications.map(
        (notification) => (

          <ListItem
            key={
              notification.id
            }
          >

            <Badge
              color="error"
              variant={
                notification.is_read
                  ? "standard"
                  : "dot"
              }
            >
              {
                notification.title
              }
            </Badge>

          </ListItem>

        )
      )}

    </List>
  );
};

export default NotificationList;