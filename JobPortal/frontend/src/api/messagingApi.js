import api from "./axios";

export const getConversations =
  async () => {
    const res = await api.get(
      "conversations/"
    );

    return res.data;
  };

export const getMessages =
  async (id) => {
    const res = await api.get(
      `conversations/${id}/messages/`
    );

    return res.data;
  };

export const sendMessage =
  async (id, message) => {
    return api.post(
      `conversations/${id}/messages/`,
      {
        message,
      }
    );
  };