import {
  useParams,
} from "react-router-dom";

import {
  useEffect,
  useState,
} from "react";

import {
  getJob,
  applyJob,
} from "../../api/jobsApi";

const JobDetail = () => {

  const { id } =
    useParams();

  const [job, setJob] =
    useState(null);

  useEffect(() => {

    getJob(id).then(
      setJob
    );

  }, [id]);

  const handleApply =
    async () => {

      await applyJob(id);

      alert(
        "Applied Successfully"
      );
    };

  if (!job)
    return <p>Loading...</p>;

  return (
    <div>

      <h2>
        {job.title}
      </h2>

      <p>
        {job.description}
      </p>

      <button
        onClick={
          handleApply
        }
      >
        Apply
      </button>

    </div>
  );
};

export default JobDetail;