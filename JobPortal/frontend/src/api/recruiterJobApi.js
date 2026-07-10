import api from "./axios";

export const getRecruiterJobs =
  async () => {
    const res = await api.get(
      "jobs/?my_jobs=true"
    );

    return res.data;
  };

export const createJob =
  async (data) => {
    const res = await api.post(
      "jobs/",
      data
    );

    return res.data;
  };

export const updateJob =
  async (id, data) => {
    const res = await api.put(
      `jobs/${id}/`,
      data
    );

    return res.data;
  };

export const deleteJob =
  async (id) => {
    return api.delete(
      `jobs/${id}/`
    );
  };