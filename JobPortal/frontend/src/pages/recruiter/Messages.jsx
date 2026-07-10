import {
  useState,
  useEffect,
} from "react";

import {
  Grid,
} from "@mui/material";

import ConversationList from "../../components/recruiter/messages/ConversationList";
import ChatWindow from "../../components/recruiter/messages/ChatWindow";

import {
  getConversations,
  getMessages,
  sendMessage,
} from "../../api/messagingApi";

const Messages = () => {

  const [conversations,
    setConversations] =
    useState([]);

  const [selected,
    setSelected] =
    useState(null);

  const [messages,
    setMessages] =
    useState([]);

  useEffect(() => {

    getConversations()
      .then(
        setConversations
      );

  }, []);

  const loadMessages =
    async (
      conversation
    ) => {

      setSelected(
        conversation
      );

      const data =
        await getMessages(
          conversation.id
        );

      setMessages(data);
    };

  const handleSend =
    async (
      message
    ) => {

      await sendMessage(
        selected.id,
        message
      );

      loadMessages(
        selected
      );
    };

  return (
    <Grid container>

      <Grid
        item
        md={3}
      >
        <ConversationList
          conversations={
            conversations
          }
          onSelect={
            loadMessages
          }
        />
      </Grid>

      <Grid
        item
        md={9}
      >
        <ChatWindow
          messages={
            messages
          }
          onSend={
            handleSend
          }
        />
      </Grid>

    </Grid>
  );
};

export default Messages;