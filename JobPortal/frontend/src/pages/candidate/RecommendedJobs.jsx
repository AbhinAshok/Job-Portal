import {
  useEffect,
  useState,
} from "react";

import {
  getRecommendedJobs,
} from "../../api/recommendationApi";

import JobCard from "../../components/jobs/JobCard";

const RecommendedJobs =
  () => {

    const [jobs,
      setJobs] =
      useState([]);

    useEffect(() => {

      getRecommendedJobs()
        .then(
          setJobs
        );

    }, []);

    return (
      <div>

        <h2>
          Recommended Jobs
        </h2>

        {jobs.map(
          (item) => (

            <JobCard
              key={
                item.job.id
              }
              job={
                item.job
              }
            />

          )
        )}

      </div>
    );
  };

export default RecommendedJobs;