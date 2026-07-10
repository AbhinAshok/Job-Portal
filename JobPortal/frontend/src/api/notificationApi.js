import api from "./axios";

export const getNotifications =
  async () => {
    const res = await api.get(
      "notifications/"
    );

    return res.data;
  };

export const markAsRead =
  async (id) => {
    return api.patch(
      `notifications/${id}/read/`
    );
  };