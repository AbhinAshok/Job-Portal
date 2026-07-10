import {
  Paper,
  Typography,
} from "@mui/material";

const MessageBubble = ({
  message,
  own,
}) => {

  return (
    <Paper
      sx={{
        p: 1,
        mb: 1,
        ml: own ? 10 : 0,
      }}
    >
      <Typography>
        {message.message}
      </Typography>
    </Paper>
  );
};

export default MessageBubble;