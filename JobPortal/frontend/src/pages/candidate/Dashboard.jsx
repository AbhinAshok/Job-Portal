import { useEffect } from "react";
import { useState } from "react";

import api from "../../api/axios";

const Dashboard = () => {

  const [stats, setStats] =
    useState(null);

  useEffect(() => {

    api
      .get("candidate/dashboard/")
      .then((res) =>
        setStats(res.data)
      );

  }, []);

  return (
    <div>

      <h2>
        Candidate Dashboard
      </h2>

      {stats && (

        <>
          <p>
            Applications:
            {stats.applications}
          </p>

          <p>
            Saved Jobs:
            {stats.saved_jobs}
          </p>

          <p>
            Interviews:
            {stats.interviews}
          </p>
        </>

      )}

    </div>
  );
};

export default Dashboard;