import api from "./axios";

export const getAnalytics =
  async (params = {}) => {
    const res = await api.get(
      "analytics/",
      { params }
    );

    return res.data;
  };