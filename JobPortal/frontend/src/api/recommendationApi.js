import api from "./axios";

export const getRecommendedJobs =
  async () => {
    const res = await api.get(
      "recommended-jobs/"
    );

    return res.data;
  };