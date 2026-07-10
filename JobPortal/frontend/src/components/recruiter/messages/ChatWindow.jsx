import {
  useState,
} from "react";

import {
  TextField,
  Button,
} from "@mui/material";

import MessageBubble from "./MessageBubble";

const ChatWindow = ({
  messages,
  onSend,
}) => {

  const [message,
    setMessage] =
    useState("");

  return (
    <div>

      <div
        style={{
          height: 500,
          overflowY: "auto",
        }}
      >

        {messages.map(
          (msg) => (
            <MessageBubble
              key={msg.id}
              message={msg}
            />
          )
        )}

      </div>

      <TextField
        fullWidth
        value={message}
        onChange={(e) =>
          setMessage(
            e.target.value
          )
        }
      />

      <Button
        onClick={() => {

          onSend(message);

          setMessage("");
        }}
      >
        Send
      </Button>

    </div>
  );
};

export default ChatWindow;