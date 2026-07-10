import api from "./axios";

export const getApplicants = async (
  params = {}
) => {
  const res = await api.get(
    "recruiter-applications/",
    { params }
  );

  return res.data;
};

export const getApplicant = async (
  id
) => {
  const res = await api.get(
    `applications/${id}/`
  );

  return res.data;
};

export const updateApplicationStatus =
  async (id, data) => {
    const res = await api.patch(
      `applications/${id}/status/`,
      data
    );

    return res.data;
  };

export const addRecruiterNote =
  async (id, note) => {
    return api.post(
      `applications/${id}/notes/`,
      { note }
    );
  };