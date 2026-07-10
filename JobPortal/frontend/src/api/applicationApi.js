import api from "./axios";

export const getApplications = async () => {
  const res = await api.get(
    "candidate-applications/"
  );

  return res.data;
};