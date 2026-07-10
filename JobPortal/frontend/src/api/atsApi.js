import api from "./axios";

export const getATSPipeline = async () => {
  const res = await api.get(
    "ats-pipeline/"
  );

  return res.data;
};

export const updateStatus = async (
  id,
  status
) => {
  const res = await api.patch(
    `applications/${id}/status/`,
    {
      status,
    }
  );

  return res.data;
};