import { useEffect } from "react";
import { useState } from "react";

import api from "../../api/axios";

const SavedJobs = () => {

  const [jobs, setJobs] =
    useState([]);

  useEffect(() => {

    api
      .get(
        "saved-jobs/"
      )
      .then((res) =>
        setJobs(
          res.data
        )
      );

  }, []);

  return (
    <div>

      <h2>
        Saved Jobs
      </h2>

      {jobs.map((job) => (

        <div
          key={job.id}
        >
          {job.title}
        </div>

      ))}

    </div>
  );
};

export default SavedJobs;