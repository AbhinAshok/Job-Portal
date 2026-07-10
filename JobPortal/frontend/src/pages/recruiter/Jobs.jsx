import {
  useEffect,
  useState,
} from "react";

import {
  getRecruiterJobs,
  deleteJob,
} from "../../api/recruiterJobApi";

import {
  Button,
} from "@mui/material";

const Jobs = () => {

  const [jobs, setJobs] =
    useState([]);

  const loadJobs = () => {

    getRecruiterJobs()
      .then((data) =>
        setJobs(
          data.results
        )
      );
  };

  useEffect(() => {
    loadJobs();
  }, []);

  const handleDelete =
    async (id) => {

      await deleteJob(id);

      loadJobs();
    };

  return (
    <div>

      <h2>
        My Jobs
      </h2>

      {jobs.map((job) => (

        <div
          key={job.id}
        >
          <h3>
            {job.title}
          </h3>

          <Button
            color="error"
            onClick={() =>
              handleDelete(
                job.id
              )
            }
          >
            Delete
          </Button>

        </div>

      ))}

    </div>
  );
};

export default Jobs;