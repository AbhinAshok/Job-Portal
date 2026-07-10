import {
  useEffect,
  useState,
} from "react";

import DashboardCards from "../../components/recruiter/DashboardCards";

import {
  getRecruiterDashboard,
} from "../../api/recruiterDashboardApi";

const Dashboard = () => {

  const [stats, setStats] =
    useState(null);

  useEffect(() => {

    getRecruiterDashboard()
      .then(setStats);

  }, []);

  if (!stats)
    return <p>Loading...</p>;

  return (
    <>
      <h2>
        Recruiter Dashboard
      </h2>

      <DashboardCards
        stats={stats}
      />
    </>
  );
};

export default Dashboard;