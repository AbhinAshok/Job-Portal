import {
  useEffect,
  useState,
} from "react";

import {
  getApplications,
} from "../../api/applicationApi";

import ApplicationCard from "../../components/applications/ApplicationCard";

const Applications = () => {

  const [applications,
    setApplications] =
    useState([]);

  useEffect(() => {

    getApplications().then(
      setApplications
    );

  }, []);

  return (
    <div>

      <h2>
        My Applications
      </h2>

      {applications.map(
        (application) => (

          <ApplicationCard
            key={
              application.id
            }
            application={
              application
            }
          />

        )
      )}

    </div>
  );
};

export default Applications;