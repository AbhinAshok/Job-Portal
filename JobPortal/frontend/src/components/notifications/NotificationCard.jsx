import {
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

const NotificationCard = ({
  notification,
  onRead,
}) => {

  return (
    <Card sx={{ mb: 2 }}>

      <CardContent>

        <Typography
          variant="h6"
        >
          {
            notification.title
          }
        </Typography>

        <Typography>
          {
            notification.message
          }
        </Typography>

        {!notification.is_read && (
          <Button
            onClick={() =>
              onRead(
                notification.id
              )
            }
          >
            Mark Read
          </Button>
        )}

      </CardContent>

    </Card>
  );
};

export default NotificationCard;