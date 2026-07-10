import api from "./axios";

export const getRecruiterDashboard =
  async () => {
    const res = await api.get(
      "dashboard/"
    );

    return res.data;
  };