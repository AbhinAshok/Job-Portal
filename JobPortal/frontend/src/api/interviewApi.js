import api from "./axios";

export const getInterviews =
  async () => {
    const res = await api.get(
      "interviews/"
    );

    return res.data;
  };