import {
  useEffect,
  useState,
} from "react";

import {
  Typography,
  Paper,
} from "@mui/material";

import AnalyticsCards from "../../components/recruiter/analytics/AnalyticsCards";

import HiringFunnelChart from "../../components/recruiter/analytics/HiringFunnelChart";

import ApplicationsTrendChart from "../../components/recruiter/analytics/ApplicationsTrendChart";

import JobPerformanceTable from "../../components/recruiter/analytics/JobPerformanceTable";

import ExportButtons from "../../components/recruiter/analytics/ExportButtons";

import {
  getAnalytics,
} from "../../api/analyticsApi";

const Analytics = () => {

  const [data,
    setData] =
    useState(null);

  useEffect(() => {

    getAnalytics()
      .then(
        setData
      );

  }, []);

  if (!data)
    return (
      <p>Loading...</p>
    );

  return (
    <>

      <Typography
        variant="h4"
        gutterBottom
      >
        Analytics Dashboard
      </Typography>

      <AnalyticsCards
        summary={
          data.summary
        }
      />

      <ExportButtons
        data={
          data.job_performance
        }
      />

      <Paper
        sx={{
          p: 3,
          mb: 3,
        }}
      >
        <Typography
          variant="h6"
        >
          Hiring Funnel
        </Typography>

        <HiringFunnelChart
          data={
            data.hiring_funnel
          }
        />
      </Paper>

      <Paper
        sx={{
          p: 3,
          mb: 3,
        }}
      >
        <Typography
          variant="h6"
        >
          Applications Trend
        </Typography>

        <ApplicationsTrendChart
          data={
            data.applications_trend
          }
        />
      </Paper>

      <Paper
        sx={{ p: 3 }}
      >
        <Typography
          variant="h6"
        >
          Job Performance
        </Typography>

        <JobPerformanceTable
          jobs={
            data.job_performance
          }
        />
      </Paper>

    </>
  );
};

export default Analytics;