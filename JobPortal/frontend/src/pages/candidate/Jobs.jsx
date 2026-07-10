import { useEffect } from "react";
import { useState } from "react";

import {
  getJobs,
} from "../../api/jobsApi";

import JobCard from "../../components/jobs/JobCard";

const Jobs = () => {

  const [jobs, setJobs] =
    useState([]);

  const [search, setSearch] =
    useState("");

  useEffect(() => {

    getJobs({
      search,
    }).then(
      setJobs
    );

  }, [search]);

  return (
    <>

      <input
        placeholder="Search Jobs"
        value={search}
        onChange={(e) =>
          setSearch(
            e.target.value
          )
        }
      />

      {jobs.results?.map(
        (job) => (

          <JobCard
            key={job.id}
            job={job}
          />

        )
      )}

    </>
  );
};

export default Jobs;