import {
  Drawer,
  Box,
  Typography,
  Button,
} from "@mui/material";

import StatusSelector from "./StatusSelector";
import RecruiterNotes from "./RecruiterNotes";
import ApplicantTimeline from "./ApplicantTimeline";

const ApplicantDrawer = ({
  open,
  applicant,
  onClose,
  onStatusUpdate,
}) => {

  if (!applicant)
    return null;

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
    >
      <Box
        sx={{
          width: 450,
          p: 3,
        }}
      >

        <Typography
          variant="h5"
        >
          {
            applicant
              .candidate_name
          }
        </Typography>

        <Typography>
          {
            applicant.job_title
          }
        </Typography>

        <Typography>
          Match Score:
          {
            applicant.match_score
          }
          %
        </Typography>

        <br />

        {applicant.resume && (
          <Button
            href={
              applicant.resume
            }
            target="_blank"
          >
            View Resume
          </Button>
        )}

        <StatusSelector
          value={
            applicant.status
          }
          onChange={(
            value
          ) =>
            onStatusUpdate(
              applicant.id,
              value
            )
          }
        />

        <br />
        <br />

        <RecruiterNotes
          applicationId={
            applicant.id
          }
        />

        <br />

        <ApplicantTimeline
          history={
            applicant.status_history
          }
        />

      </Box>
    </Drawer>
  );
};

export default ApplicantDrawer;