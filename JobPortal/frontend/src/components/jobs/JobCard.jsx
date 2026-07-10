import {
  Link,
} from "react-router-dom";

const JobCard = ({
  job,
}) => {

  return (
    <div>

      <h3>
        {job.title}
      </h3>

      <p>
        {job.company_name}
      </p>

      <p>
        {job.location}
      </p>

      <Link
        to={`/jobs/${job.id}`}
      >
        View Details
      </Link>

    </div>
  );
};

export default JobCard;