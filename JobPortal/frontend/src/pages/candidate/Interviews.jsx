import {
  useEffect,
  useState,
} from "react";

import {
  getInterviews,
} from "../../api/interviewApi";

import InterviewCard from "../../components/interviews/InterviewCard";

const Interviews = () => {

  const [interviews,
    setInterviews] =
    useState([]);

  useEffect(() => {

    getInterviews().then(
      setInterviews
    );

  }, []);

  return (
    <div>

      <h2>
        Interviews
      </h2>

      {interviews.map(
        (interview) => (

          <InterviewCard
            key={
              interview.id
            }
            interview={
              interview
            }
          />

        )
      )}

    </div>
  );
};

export default Interviews;