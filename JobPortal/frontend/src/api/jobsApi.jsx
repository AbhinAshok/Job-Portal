import api from "./axios";

export const getJobs = async (params) => {
  const res = await api.get("jobs/", {
    params,
  });

  return res.data;
};

export const getJob = async (id) => {
  const res = await api.get(
    `jobs/${id}/`
  );

  return res.data;
};

export const applyJob = async (id) => {
  const res = await api.post(
    `jobs/${id}/apply/`
  );

  return res.data;
};